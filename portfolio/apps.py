import socket

from django.apps import AppConfig

from .utils import create_dir


class PortfolioConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'portfolio'

    def ready(self):
        create_dir('media/audio')
        create_dir('media/albumArts')

        local_ip = socket.gethostbyname(socket.gethostname())
        print(f'Local IP: {local_ip}')
