from django.http import Http404,HttpResponse
from django.shortcuts import render 
from . import keywords

class keep:
    ptr = []

def index(request):
    keep.ptr.clear()
    return render(request, 'Idea/index.html')

def detail(request):
    try:
        a = request.GET.get('key')
        keep.ptr += keywords.word(a)
        data = {
            'key': request.GET.get('key'),
            'data': keep.ptr
        }
    except Exception:
        raise Http404('error')

    return render(request, 'Idea/index.html', data)

