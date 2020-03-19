from django.http import Http404,HttpResponse
from django.shortcuts import render 
from . import keywords
from . import same

def index(request):
    same.keep.ptr.clear()
    same.keep.point.clear()
    same.keep.flag = False
    same.keep.word_num = 1
    same.keep.size_num = 0
    return render(request, 'Idea/index.html')

def detail(request):
    #try:
    a = request.GET.get('key')
    #pr = same.keep(a,False,0,0)
    same.keep.ptr += keywords.word(a)
    same.keep.size_num = len(same.keep.ptr) + 1
    data = {
        'key': request.GET.get('key'),
        'data': same.keep.ptr,
        'point': same.keep.point,
        'flag': same.keep.flag,
        'word_num': same.keep.word_num,
        'size_num': same.keep.size_num
    }
        #print(data)
    return render(request, 'Idea/index.html', data)
    #except Exception:
        #print(data)
    #    raise Http404('error')

    


##メモ(returnするもの)
##静的メンバのptr、受け取ったwordの番号(ptr.indexでさがせる)、APIでデータを追加する前の要素数
##

