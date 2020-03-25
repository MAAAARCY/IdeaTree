from django.http import Http404,HttpResponse
from django.shortcuts import render 
from . import keywords
from . import same

def index(request):
    same.keep.ptr.clear()
    same.keep.point.clear()
    same.keep.flag = False
    return render(request, 'Idea/index.html')

def detail(request):
    try:
        a = request.GET.get('key')
        same.keep.ptr += keywords.word(a)
        data = {
            'key': request.GET.get('key'),
            'data': same.keep.ptr,
            'point': same.keep.point,
            'flag': same.keep.flag,
        }
        return render(request, 'Idea/index.html', data)
    except Exception:
        return render(request, 'Idea/error.html')

    


##メモ(returnするもの)
##静的メンバのptr、受け取ったwordの番号(ptr.indexでさがせる)、APIでデータを追加する前の要素数
##

