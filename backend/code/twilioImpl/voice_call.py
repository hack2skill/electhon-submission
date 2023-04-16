from twilio.rest import Client
import urllib.parse

def trigger_voice_call(jingle, lang):
    account_sid = 'XX'
    auth_token = 'XX'
    client = Client(account_sid, auth_token)
    toPhoneNo = '+918384852943'
    url = "https://1ae7-2409-408c-8d9e-5af9-e4c1-762f-2d0-ff09.ngrok-free.app/api/respondToCall?jingle=" + urllib.parse.quote_plus(jingle) + "&language=" + lang
    try:
        call = client.calls.create(
                                url=url,
                                to=toPhoneNo,
                                from_='+16206464499'
                            )
                            
        return "Success"
    except Exception as e:
        print(e)
        return "Failure"

def send_media(default_message, poster_url):
    try:
        account_sid = 'XX'
        auth_token = 'XX'
        client = Client(account_sid, auth_token)

        message = client.messages.create(
            from_='whatsapp:+14155238886',
            body=default_message,
            media_url=poster_url,
            to='whatsapp:+918384852943'
        )
        print(message.sid)
    except Exception as e:
        print(e)

def send_message(message):
    account_sid = 'XX'
    auth_token = 'XX'
    client = Client(account_sid, auth_token)

    message = client.messages.create(
        from_='whatsapp:+14155238886',
        body=message,
        to='whatsapp:+918384852943'
    )
    print(message.sid)