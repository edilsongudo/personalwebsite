from django.urls import path

from .views import get_songs, home, upload_song

urlpatterns = [
    path('', home, name='home'),
    path('songs/', get_songs, name='get-songs'),
    path('upload/', upload_song, name='upload-song'),
]
