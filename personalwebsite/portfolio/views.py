import io
import os

from django.core.files.images import ImageFile
from django.conf import settings
from django.http import FileResponse, HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from PIL import Image

from .forms import ContactForm, SongForm
from .models import Song
from .utils import get_meta, get_only_meta


def home(request):
    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse(
                """Message sent successfully.
                Thank you, I will get in touch with you soon."""
            )
    context = {'form': form}
    return render(request, 'portfolio/home.html', context)


def get_songs(request):
    songs = []
    objects = Song.objects.all()
    for obj in objects:
        song = {}
        song['filename'] = os.path.basename(obj.file.name)
        song['artwork'] = obj.artwork.url
        song['file'] = obj.file.url
        song['title'] = obj.title
        song['artist'] = obj.artist
        song['album'] = obj.album
        songs.append(song)
    return JsonResponse({'songs': songs})


def upload_song(request):
    form = SongForm()
    if request.method == 'POST':
        form = SongForm(request.POST, request.FILES)
        if form.is_valid():
            file = request.FILES['file'].temporary_file_path()
            filename = request.FILES['file'].name
            artist = get_only_meta(file)['artist']
            album = get_only_meta(file)['album']
            title = get_only_meta(file)['title']
            genre = get_only_meta(file)['genre']
            artwork = get_only_meta(file)['artwork']
            artwork_filename = os.path.splitext(filename)[0] + '.jpg'
            if isinstance(artwork, bytes):
                artwork = Image.open(io.BytesIO(artwork))
                artwork = artwork.convert('RGB')
                artwork.thumbnail((500, 500), Image.ANTIALIAS)
                artwork_byte_arr = io.BytesIO()
                artwork.save(artwork_byte_arr, format='JPEG')
                artwork_byte_arr = artwork_byte_arr.getvalue()
                artwork = ImageFile(io.BytesIO(artwork_byte_arr), name=artwork_filename)
            form.save(commit=False)
            form.instance.title = title
            form.instance.artist = artist
            form.instance.genre = genre
            form.instance.album = album
            form.instance.filename = filename
            form.instance.artwork = artwork
            form.save()
            return redirect('upload-song')
    context = {'form': form}
    return render(request, 'portfolio/upload_song.html', context)


@csrf_exempt
def StaticAudioView(request, filename):
    response = FileResponse(
        open(os.path.join(settings.MEDIA_ROOT, 'audio', filename), 'rb')
    )
    return response
