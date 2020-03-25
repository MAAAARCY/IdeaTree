from django.http import Http404,HttpResponse
from django.shortcuts import render 
from . import keywords

def index(request):
    return render(request, 'Idea/index.html')

def detail(request):
    try:
        ptr = []
        a = request.GET.get('key')
        ptr = keywords.word(a)
        data = {
            'key': request.GET.get('key'),
            'data': ptr
        }
    except Exception:
        raise Http404('error')

    return render(request, 'Idea/index.html', data)

