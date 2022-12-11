from django.db import models


class Contact(models.Model):
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return self.email


class Song(models.Model):
    filename = models.CharField(max_length=255)
    title = models.CharField(max_length=200, null=True)
    album = models.CharField(max_length=200, null=True)
    artist = models.CharField(max_length=200, null=True)
    genre = models.CharField(max_length=200, null=True)
    artwork = models.ImageField(upload_to='albumArts', max_length=255, null=True)
    file = models.FileField(upload_to='audio', max_length=255)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return f'{self.filename}'
