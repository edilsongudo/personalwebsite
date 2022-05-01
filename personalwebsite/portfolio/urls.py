from django.urls import path

from .views import get_songs, home

urlpatterns = [
    path('', home, name='home'),
    path('songs/', get_songs, name='get-songs'),
]
