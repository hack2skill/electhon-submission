from crypt import methods
from email import message
import flask
from flask_cors import CORS
from flask import Flask, jsonify,request
import json
import random
import langcodes
import requests

from flask_cors import CORS
from twilioImpl.voice_call import trigger_voice_call, send_media, send_message

from twilio.twiml.voice_response import VoiceResponse
from twilio.twiml.messaging_response import MessagingResponse

from gpt.gpt import generate_jingle
from gpt.gpt import generate_slogan
from db import store_jingle, store_poster, save_image, get_all_jingles, get_all_posters

sample_info_data = {
    "hindi":"\u0906\u092a\u0915\u093e \u0928\u093f\u0915\u091f\u0924\u092e \u092e\u0924\u0926\u093e\u0928 \u0915\u0947\u0902\u0926\u094d\u0930 \u0031\u002e\u0032 \u0915\u093f\u002e\u092e\u0940\u002e \u0926\u0942\u0930 \u0939\u0948\u0964 \u0926\u0947\u0936 \u0915\u0940 \u0938\u092b\u0932\u0924\u093e \u092e\u0947\u0902 \u092f\u094b\u0917\u0926\u093e\u0928 \u0926\u0947\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0905\u092d\u0940 \u091c\u093e\u090f\u0902 \u0914\u0930 \u0905\u092a\u0928\u093e \u0935\u094b\u091f \u0921\u093e\u0932\u0947\u0902\u0964",
    "kannada":"\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cb9\u0ca4\u0ccd\u0ca4\u0cbf\u0cb0\u0ca6 \u0cae\u0ca4\u0ca6\u0cbe\u0ca8 \u0c95\u0cc7\u0c82\u0ca6\u0ccd\u0cb0\u0cb5\u0cc1 \u0031\u002e\u0032 \u0c95\u0cbf\u0cae\u0cc0 \u0ca6\u0cc2\u0cb0\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf\u0ca6\u0cc6\u002e \u0cb0\u0cbe\u0cb7\u0ccd\u0c9f\u0ccd\u0cb0\u0ca6 \u0caf\u0cb6\u0cb8\u0ccd\u0cb8\u0cbf\u0c97\u0cc6 \u0c95\u0cca\u0ca1\u0cc1\u0c97\u0cc6 \u0ca8\u0cc0\u0ca1\u0cb2\u0cc1 \u0c88\u0c97\u0cb2\u0cc7 \u0cb9\u0ccb\u0c97\u0cbf \u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cae\u0ca4 \u0c9a\u0cb2\u0cbe\u0caf\u0cbf\u0cb8\u0cbf\u002e",
    "english":"Your nearest polling station is 1.2 Kms away. Go and cast your vote now to contribute to the success of the nation."
}

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/ping')
def ping():
    response = jsonify({'success':True})
    return response

@app.route('/api/respondToCall', methods=['GET', 'POST'])
def respondToCall():
    resp = VoiceResponse()
    jingle = str(request.args.get('jingle'))
    language = str(request.args.get('language'))
    message_to_say = jingle + "\n\n" + sample_info_data.get(language, "Your nearest polling station is 1.2 Kms away. Go and cast your vote now to contribute to the success of the nation. Thank you")
    resp.say(message_to_say, voice='Polly.Aditi',language="hi-IN")
    return str(resp)

@app.route('/api/responseToWhatsapp', methods=['GET', 'POST'])
def respondToWhatsApp():
    data = request.values
    message = data['Body']
    name = data['ProfileName']
    resp = MessagingResponse()
    if message == "1":
        response = requests.request("GET", "http://192.168.43.58:8000/generate_video?name="+name, headers={}, data={})
        send_media("Woah! That's quite an achievement! To celebrate your win, MegaStar priyanka chopra has a message for you: " + response.json()['url'], "https://firebasestorage.googleapis.com/v0/b/myapp-ab432.appspot.com/o/Priyanka.jpg?alt=media&token=2ff167f8-5f59-42bb-aa28-c65aaef90f05")
        resp.message("Do share it on your social media handles! 😀")
    elif message == "2":
        resp.message('Thank you for your response. Please cast your vote by visiting the nearest polling both. Do you want me to book a cab for you ?')
    elif message.lower() == "yes":
        resp.message('Sure, I have initiated a booking request for you. \nThe trip details will be shared shortly. Thank you')
    elif message.lower() == "no":
        resp.message("Sure, Thank you. Looking forward to see you at the polling booth. 😀")
    else:
        resp.message("Sorry, I did not understand. Can you please resend it ?")
    return str(resp)

@app.route('/api/generate', methods=["POST"])
def generate():
    try:
        type = str(request.args.get('type'))
        data = json.loads(request.get_data())
        print(data)
        if type == "jingles":
            jingles = generate_jingle(generate_jingle_prompt(data))
            return {'success':True,'jingles':jingles}
        else:
            slogans = generate_slogan(generate_slogan_prompt(data))
            return jsonify({'success': True, 'slogans':slogans})
    except Exception as e:
        print(e)
        return jsonify({'success': False})

@app.route('/api/saveAndLaunchJingles', methods=["POST"])
def saveJingle():
    try:
        data = json.loads(request.get_data())
        data['id'] = str(random.randrange(111111, 999999, 6))
        store_jingle(data)
        trigger_voice_call(data['jingle'], data['language'])
        send_message(data['jingle'] + "\n\n" + sample_info_data[data['language']])
        send_message("*Did you cast your vote ? Send 1 for Yes, and send 2 for No.*")
        return {'success':True, 'jingleId': data['id']}
    except Exception as ex:
        print(ex)
        return {'success': False}

@app.route('/api/saveAndLaunchPosters', methods=["POST"])
def savePoster():
    try:
        data = json.loads(request.get_data())
        data['id'] = str(random.randrange(111111, 999999, 6))
        url = save_image(data['image'], data['id'])
        print(url)
        data['posterUrl'] = url
        del data['image']
        store_poster(data)
        send_media(sample_info_data[data['language']], url)
        return {'success':True, 'posterId': data['id'], 'posterUrl': data['posterUrl']}
    except Exception as e:
        print(e)
        return {'success': False}

@app.route('/api/list')
def getData():
    try:
        response = jsonify({'success':True,'jingles':get_all_jingles(), 'slogans':get_all_posters()})
        return response
    except:
        response = flask.jsonify({'success': False})
        return response

def generate_jingle_prompt(data):
    ageGroup = data['ageGroup'] # youth, middle-aged, elderly
    demographic = data['demographic'] # rural, urban
    gender = data['gender']
    language = data['language'] 
    occupation = data['occupation'] #salaries, business men, unemployed, student
    keywords = data["keywords"]
    prompt_subtext = construct_prompt_subtext(ageGroup, gender, occupation)
    if prompt_subtext != "":
        prompt = "Create a rhyming jingle in " + language + " to motivate " + prompt_subtext + " of" + demographic + " India to vote in elections."
    else:
        prompt = "Create a rhyming jingle in " + language + " to motivate people" + " of" + demographic + " India to vote in elections."
    
    if len(keywords) != 0:
        prompt = "Also you can use the following keywords: "
        for keyword in keywords:
            prompt += keyword
            prompt += ", "
        prompt.rstrip(', ') 
    return prompt

def generate_slogan_prompt(data):
    ageGroup = data['ageGroup'] # youth, middle-aged, elderly
    demographic = data['demographic'] # rural, urban
    gender = data['gender']
    language = data['language'] 
    occupation = data['occupation'] #salaries, business men, unemployed, student
    keywords = data["keywords"]
    prompt_subtext = construct_prompt_subtext(ageGroup, gender, occupation)
    if prompt_subtext != "":
        prompt = "Create a rhyming slogan in " + language + " language to motivate " + prompt_subtext + " of" + demographic + " India to vote in elections" 
    else:
        prompt = "Create a rhyming slogan in " + language + " language to motivate people" + " of" + demographic + " India to vote in elections"
    
    if len(keywords) != 0:
        prompt = "Also you can use the following keywords: "
        for keyword in keywords:
            prompt += keyword
            prompt += ", "
        prompt.rstrip(', ') 
    return prompt

# salaried middle-aged females/males
# salaied adult females/males
# salaried elderly females/males

# unemployed middle-aged females/males
# unemployed adult females/males
# unemployed elderly females/males

# middle-aged female/male students
# adult female/male students
# elderly female/male students

# middle-aged female/male business owners
# adult female/male business owners
# elderly female/male businessm owners

def construct_prompt_subtext(ageGroup, gender, occupation):
    if occupation == "salaried" or occupation == "umemployed":
        return occupation + " " + ageGroup + " " + gender + "s"
    elif occupation == "student":
        return ageGroup + " " + gender + " " + occupation + "s"
    elif occupation == "business":
        return ageGroup + " " + gender + " business owners"
    else:
        return ""

if __name__ == '__main__':
    app.run(port=5000, debug=True)
