from django.shortcuts import render
from .utils import get_meta
from django.http import JsonResponse, FileResponse
from django.conf import settings
import os
from django.views.decorators.csrf import csrf_exempt


def home(request):
    return render(request, 'portfolio/home.html')


def get_songs(request):
    songs = os.listdir('media/audio')
    for song in songs:
        print(get_meta('media/audio',
                       'media/albumArts/',
                       song,))
    return JsonResponse({'songs': songs})


@csrf_exempt
def StaticAudioView(request, filename):
  response = FileResponse(open(os.path.join(settings.MEDIA_ROOT, "audio/", filename), "rb"))
  return response
