from django.shortcuts import render
from .utils import get_meta
from django.http import JsonResponse
import os


def home(request):
    return render(request, 'portfolio/home.html')


def get_songs(request):
    songs = os.listdir('media/audio')
    for song in songs:
        print(get_meta('media/audio',
                       'media/albumArts/',
                       song,))
    return JsonResponse({'songs': songs})
