from django.urls import path
from .views import home, get_songs

urlpatterns = [
    path('', home, name="home"),
    path('songs/', get_songs, name="get-songs"),
]
