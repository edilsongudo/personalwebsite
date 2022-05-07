from django.contrib import admin

from .models import Contact, Song

# Register your models here.
admin.site.register(Contact)
admin.site.register(Song)