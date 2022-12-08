from django.urls import path

from .views import get_songs, home, upload_song, dez_dicas_cv

urlpatterns = [
    path('', home, name='home'),
    path('songs/', get_songs, name='get-songs'),
    path('upload/', upload_song, name='upload-song'),
    path('dez-dicas-para-melhorar-seu-cv/', dez_dicas_cv, name='dez-dicas-cv'),
]
