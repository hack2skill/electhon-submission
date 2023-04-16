from google.cloud import firestore
db = firestore.Client()
from firebase_admin import storage
from firebase_admin import credentials
import firebase_admin
import base64, re
import requests

cred = credentials.Certificate('/Users/raghavmaheshwari/Desktop/KSP_Hack_2023/ECI/code/creds.json')
firebase_admin.initialize_app(cred, {
    'storageBucket': 'myapp-ab432.appspot.com'
})
bucket = storage.bucket()

jingle_collection = db.collection('jingles')
poster_collection = db.collection('posters')

def save_image(data, id):
    split = data.split('base64')
    base64_image = base64.b64decode(split[1])
    blob = bucket.blob(str(id) + '.png')
    blob.upload_from_string(
        base64_image,
        content_type='image/png'
    )
    image_url =  "https://firebasestorage.googleapis.com/v0/b/myapp-ab432.appspot.com/o/" + str(id) + ".png"
    response = requests.request("GET", image_url, headers={}, data={})
    token = response.json()['downloadTokens']
    image_url = image_url + "?alt=media&token=" + token
    return image_url

def save_video():
    blob = bucket.blob('priyanka_video.mp4')
    with open('/Users/raghavmaheshwari/Desktop/KSP_Hack_2023/ECI/code/priyanka_clip.mp4' , 'rb') as f:
        blob.upload_from_file(f,content_type='video/mp4')
    video_url =  "https://firebasestorage.googleapis.com/v0/b/myapp-ab432.appspot.com/o/priyanka_video.mp4"
    response = requests.request("GET", video_url, headers={}, data={})
    print(response)
    token = response.json()['downloadTokens']
    video_url = video_url + "?alt=media&token=" + token
    return video_url

# def save_jingle(jingle, id):
#     split = data.split('base64')
#     base64_image = base64.b64decode(split[1])
#     blob = bucket.blob(str(id) + '.png')
#     blob.upload_from_string(
#         base64_image,
#         content_type='audio/mp4'
#     )
#     audio_url =  "https://firebasestorage.googleapis.com/v0/b/myapp-ab432.appspot.com/o/" + str(id) + ".mp4"
#     response = requests.request("GET", audio_url, headers={}, data={})
#     token = response.json()['downloadTokens']
#     audio_url = audio_url + "?alt=media&token=" + token
#     return audio_url

def store_jingle(jingle):
    jingle_document = jingle_collection.document(jingle['id'])
    jingle_document.set(dict(jingle))

def store_poster(poster):
    poster_document = poster_collection.document(poster['id'])
    poster_document.set(dict(poster))

def get_jingle_data(jingleId):
    jingle = jingle_collection.document(jingleId).get().to_dict()
    return dict(jingle)

def get_poster_data(posterId):
    poster = jingle_collection.document(posterId).get().to_dict()
    return poster

def get_all_jingles():
    jingles = jingle_collection.stream()
    response = list()
    for jingle in jingles:
        response.append(jingle.to_dict())
    return response

def get_all_posters():
    posters = poster_collection.stream()
    response = list()
    for poster in posters:
        response.append(poster.to_dict())
    return response

# store_jingle({'id':'2', 'url':'abc'})
# store_poster({'id':'2', 'url':'abc'})
# print(get_jingle_data('2'))
# print(get_poster_data('2'))
# print(get_all_posters())
# print(get_all_jingles())
