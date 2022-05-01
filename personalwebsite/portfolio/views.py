import os

from django.conf import settings
from django.http import HttpResponse, FileResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .forms import ContactForm
from .utils import get_meta


def home(request):
    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse(
                '''Message sent successfully.
                Thank you, I will get in touch with you soon.'''
            )
    context = {'form': form}
    return render(request, 'portfolio/home.html', context)


def get_songs(request):
    songs = os.listdir('media/audio')
    return JsonResponse({'songs': songs})


@csrf_exempt
def StaticAudioView(request, filename):
    response = FileResponse(
        open(os.path.join(settings.MEDIA_ROOT, 'audio/', filename), 'rb')
    )
    return response
