
from flask import Flask, render_template, request, redirect, url_for, send_file
import numpy as np
import requests
import json
import openai
import os
import cloudinary
import cloudinary.uploader
import textwrap
import io
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont
import requests

app = Flask(__name__)


data = []

@app.route("/")
def index():
    return render_template("index.html")


def push_cloudinary(data=None, url=None):
    cloudinary.config(
    cloud_name="dkjv1ictm",
    api_key="153874947239145",
    api_secret="ZkSte7mI4e1s5XNltpJw-NmMQ5Q"
    )
    if url!=None:
        data = url
    elif data!=None:
        data = data
    cloudinary_response = cloudinary.uploader.upload_image(
    file = data,
    use_filename=True,
    folder="/electhon",
    )

    response = cloudinary_response.metadata.get("url")
    if response[-3:] != "jpg":
        response = response.replace(response[len(response) - 3:], "jpg")
    return response


def generate_image():
    url = "https://v1.genr.ai/api/circuit-element/generate-image"

    payload = {
        "prompt": "Citizens casting their vote in India",
        "height": 512,
        "width": 512,
        "model": "stable-diffusion-2",
        "n_images": 1
    }
    headers = {"Content-Type": "application/json"}

    response = requests.post(url, json=payload, headers=headers)

    print(response.json())
    return response.json()['output']



def get_text(prompt):

    # Note: you need to be using OpenAI Python v0.27.0 for the code below to work
    openai.api_key = "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"
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
            {"role": "system", "content": "You are a creative advertisment generator."},
            {"role": "user", "content": prompt},
        ]
    )
    # print(response)
    return response["choices"][0]["message"]["content"]


    # url = "https://v1.genr.ai/api/circuit-element/prompt-to-text"
    # payload = {
    # "prompt": prompt,
    # }
    # headers = {"Content-Type": "application/json"}
    # response = requests.post(url, json=payload, headers=headers)
    # print(response)
    # return json.loads(response.text)["output"]


def get_text_ads(location, language, religion, age, keywords, ad_type):

    if ad_type == "slogans":
        slogan_prompt = f"Generate a tagline as an advertisment to attract voters. The tagline should be relatable for the people of {location} and should be in {language} language. The age distribution of is area is {age} and it is a {religion} majority. Sole local references are - {keywords}. The tagline should be limited to 2-4 lines only. Note: You don't have to use all the references in the tagline."
        return {"slogans": get_text(slogan_prompt)}
    
    if ad_type == "jingles":
        jingle_prompt = f"Generate a jingle as an advertisment to attract voters. The jingle should be relatable for the people of {location} and should be in {language} language. The age distribution of is area is {age} and it is a {religion} majority. Sole local references are - {keywords}. Note: You don't have to use all the references in the jingle, the jingle should be in rhyme scheme AABB and length should not exceed 8-10 lines."
        return {"jingles": get_text(jingle_prompt)}
    
    if ad_type == "songs":
        song_prompt = f"Generate a song as an advertisment to attract voters. The song should be relatable for the people of {location} and should be in {language} language. The age distribution of is area is {age} and it is a {religion} majority. Sole local references are - {keywords}. Note: You don't have to use all the references in the song. the song should have a proper tag of chorus and verse."
        return {"songs": get_text(song_prompt)}

    if ad_type == "posters":
        poster_slogan_prompt = f"Generate a tagline as an advertisment to attract voters. The tagline should be relatable for the people of {location} and should be in {language} language. The age distribution of is area is {age} and it is a {religion} majority. Sole local references are - {keywords}. The tagline should be limited to 2-4 lines only. Note: You don't have to use all the references in the tagline."
        poster_slogan = get_text(poster_slogan_prompt)
        image_link = generate_image()
        print(poster_slogan)

        # response = requests.get(image_link)
        # img = Image.open(io.BytesIO(response.content))
        #
        # # Create a draw object for the image
        # draw = ImageDraw.Draw(img)
        #
        # # Set the font and font size
        # font = ImageFont.truetype("arial.ttf", 20)
        #
        # # Get the size of the text
        # text_size = draw.textsize(poster_slogan, font=font)
        #
        # # Calculate the position of the text
        # text_x = img.width // 2 - text_size[0] // 2
        # text_y = img.height - text_size[1] - 10
        #
        # # Draw the text on the image
        # draw.text((text_x, text_y), poster_slogan, font=font, fill="white")
        #
        # # Save the image to a bytes buffer
        # img_bytes = io.BytesIO()
        # img.save(img_bytes, format='PNG')
        # img_bytes.seek(0)

        # # Convert the bytes buffer to a NumPy array
        # img_array = np.frombuffer(img_bytes.getvalue(), dtype=np.uint8)

        # image_url = push_cloudinary(img_bytes)
        # return render_template("images.html", img_src=image_url)




        # Download the image from the cloudinary link
        response = requests.get(image_link)

        # Load the image into a PIL Image object
        image = Image.open(BytesIO(response.content))

        # Create a draw object on the image
        draw = ImageDraw.Draw(image)

        # Define the text and font
        text = poster_slogan
        font = ImageFont.truetype("arial.ttf", 16)

        # Calculate the size of the text
        text_size = draw.textsize(text, font)

        # Calculate the position of the text
        x = (image.width - text_size[0]) // 2  # use floor division to ensure an integer value
        y = image.height - text_size[1] - 10  # adjust the margin to your liking

        # Draw the text on the image
        draw.text((x, y), text, font=font, fill=(255, 255, 255))

        img_bytes = io.BytesIO()
        image.save(img_bytes, format='PNG')
        img_bytes.seek(0)

        image_url = push_cloudinary(img_bytes)
        return render_template("images.html", img_src=image_url)



        # Save the modified image
        # image.save('path/to/new/image.png')







@app.route("/generate", methods=['GET', 'POST'])
def generate():
    if request.method == "POST":
        state = request.form.get("state")
        city = request.form.get("city")
        # location = request.form.get("location")
        language = request.form.get("language")
        religion = request.form.get("religion")
        age = request.form.get("age")
        keywords = request.form.get("local-references")
        ad_type = request.form.get("submit-button")
        print(text_on_image(get_text_ads(city, language, religion, age, keywords, ad_type), ad_type))
        data.append([state, city, language, religion, age, keywords, ad_type])

        print(city, language, religion,ad_type)
        urls = [text_on_image(get_text_ads(city, language, religion, age, keywords, ad_type), ad_type), text_on_image(get_text_ads(city, language, religion, age, keywords, ad_type), ad_type), text_on_image(get_text_ads(city, language, religion, age, keywords, ad_type), ad_type)]
        return redirect(url_for('images', img_src=urls))
    else:
        return render_template("generate.html")


@app.route("/regenerate", methods=['POST'])
def regenerate():
    global data
    temp = data[0]
    state = temp[0]
    city = temp[1]
    language = temp[2]
    religion = temp[3]
    age = temp[4]
    keywords = temp[5]
    ad_type = temp[6]
    urls = [text_on_image(get_text_ads(city, language, religion, age, keywords, ad_type), ad_type), text_on_image(get_text_ads(city, language, religion, age, keywords, ad_type), ad_type), text_on_image(get_text_ads(city, language, religion, age, keywords, ad_type), ad_type)]

    return redirect(url_for('images', img_src=urls))




def text_image(height,width,text):
    print(text)
    image = Image.open("bg.png")

    image = image.resize((height, width))


    draw = ImageDraw.Draw(image)

    font_size = 50
    font = ImageFont.truetype("SakalBharati.ttf", font_size)

    max_width = 1500

    wrapped_text = textwrap.wrap(text, width=max_width/font_size)

    y_text = image.height // 2 - font_size * len(wrapped_text) // 2

    for line in wrapped_text:
        text_width, text_height = font.getsize(line)

        x_text = (image.width - text_width) // 2

        draw.text((x_text, y_text), line, font=font, fill=(0, 0, 0))

        y_text += text_height

    img_byte_arr = io.BytesIO()
    image.save(img_byte_arr, format='PNG')
    img_byte_arr = img_byte_arr.getvalue()
    print(push_cloudinary(img_byte_arr))
    return push_cloudinary(img_byte_arr)


def text_on_image(text,addType):
    if(addType == "songs"):
        return text_image(1080,1920,text[addType])

    elif(addType == "slogans"):
        return text_image(1920,1080,text[addType])

    elif(addType == "jingles"):
        return text_image(1080,1920,text[addType])



    


@app.route("/generate.html")
def gen_page():
    return render_template("generate.html")


@app.route("/index.html")
def home_page():
    return render_template("index.html")



@app.route("/images")
def images():
    # get the output from the query parameter
    img_src = request.args.getlist('img_src')
    # render the images.html template with the output
    return render_template('images.html', img_src=img_src)




if __name__ == '__main__':
    # print(get_text_ads("Mumbai", "English", "Hindu", "25-35", "Gateway of India, Marine drive", "song")["song"])
    app.run()



