import json
import requests
import random
from . import views
from . import same

api = "http://wordassociator.ap.mextractr.net/word_associator/api_query?query={word}"
user_name = "MARCY"
password = "Marcy1003"

def rand_ints_nodup(a, b, k):
  ns = []
  while len(ns) < k:
    n = random.randint(a, b)
    if not n in ns:
      ns.append(n)
  return ns

def word(word: str):
    data = {
        'api_query': 'Japanese',
        'word': word,
    }
    api_datas = []
    rm = []
    payload = ("MARCY", "Marcy1003")
    url = api.format(word = data["word"])
    r = requests.get(url,auth=payload)
    body = json.loads(r.text)

    if same.keep.flag == False:
        api_datas.append(data['word'])
        rm = rand_ints_nodup(0,19,3)
        for i in rm:
            api_datas.append(body[i][0])
        same.keep.flag = True
        return api_datas
    else:
        same.keep.point.append(same.keep.ptr.index(data["word"])+1)
        rm = rand_ints_nodup(0,19,3)
        for i in rm: 
            api_datas.append(body[i][0])
        return api_datas