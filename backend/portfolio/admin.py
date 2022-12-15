from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin

from .models import Contact, Song

# Register your models here.
admin.site.register(Contact)
# admin.site.register(Song)

@admin.register(Song)
class SongAdmin(SortableAdminMixin, admin.ModelAdmin):
	list_display = ['title', 'show', 'my_order']
	list_editable=['show']