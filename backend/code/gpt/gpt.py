import openai
openai.api_type = "XX"
openai.api_base = "XX"
openai.api_version = "XX"
openai.api_key = "XX"

def generate_jingle(prompt):
    response = openai.ChatCompletion.create(
    engine="gpt4",
    messages = [{"role":"system",
                "content":"You are a creative writing bot that generates a jingle of exactly 4 lines. The jingle should be rhyming. Generate the text only in the language specified in the prompt."},
                {"role":"user", "content":prompt}
                ],
    temperature=0.9,
    max_tokens=1000,
    top_p=1,
    n = 6,
    frequency_penalty=1,
    presence_penalty=0,
    stop=None)

    jingles = list()
    for res in response['choices']:
        jingles.append({'jingle':res['message']['content']})
    return jingles    

def generate_slogan(prompt):
    response = openai.ChatCompletion.create(
    engine="gpt4",
    messages = [{"role":"system",
                "content":"You are a creative writing bot that generates unique slogan of exactly 2 lines. The slogan should be rhyming. Generate the text only in the language specified in the prompt."},
                    {"role":"user", "content":prompt}
                ],
    temperature=0.9,
    max_tokens=1000,
    top_p=1,
    n = 6,
    frequency_penalty=1,
    presence_penalty=0,
    stop=None)

    slogans = list()
    for res in response['choices']:
        slogans.append({'slogan':res['message']['content']})
    return slogans    