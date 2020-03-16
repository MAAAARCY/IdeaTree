import json
import requests

api = "http://wordassociator.ap.mextractr.net/word_associator/api_query?query={word}"
user_name = "MARCY"
password = "Marcy1003"

def word(word: str):
    data = {
        'api_query': 'Japanese',
        'word': word,
    }
    ptr = []
    payload = ("MARCY", "Marcy1003")
    url = api.format(word = data["word"])
    r = requests.get(url,auth=payload)
    body = json.loads(r.text)

    ptr.append(data['word'])

    for i in range(len(body)): 
        ptr.append(body[i][0])

    return ptr