from django.urls import path
from . import views

app_name = 'Idea'
urlpatterns = [
    path(r'', views.index, name = 'index'),
    path(r'#/', views.detail, name = 'detail')
]
