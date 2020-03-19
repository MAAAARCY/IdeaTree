import json
import requests
from . import views
from . import same

api = "http://wordassociator.ap.mextractr.net/word_associator/api_query?query={word}"
user_name = "MARCY"
password = "Marcy1003"

def word(word: str):
    data = {
        'api_query': 'Japanese',
        'word': word,
    }
    api_datas = []
    payload = ("MARCY", "Marcy1003")
    url = api.format(word = data["word"])
    r = requests.get(url,auth=payload)
    body = json.loads(r.text)

    if same.keep.flag == False:
        api_datas.append(data['word'])
        for i in range(3):
            api_datas.append(body[i][0])
        same.keep.flag = True
        #same.keep.size_num = len(same.keep.ptr) + 1
        return api_datas
    else:
        same.keep.word_num = same.keep.ptr.index(data["word"])+1
        same.keep.point.append(same.keep.ptr.index(data["word"])+1)
        for i in range(3): 
            api_datas.append(body[i][0])
        #same.keep.size_num = len(same.keep.ptr) + 1
        return api_datas