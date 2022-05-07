from django.forms import ModelForm

from .models import Contact, Song


class ContactForm(ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'


class SongForm(ModelForm):
    class Meta:
        model = Song
        fields = ['file']
