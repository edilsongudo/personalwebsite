import io
import os

import music_tag
from PIL import Image


def get_only_meta(file):
    """
    Get metadata from a audio file
    """

    meta = music_tag.load_file(file)

    try:
        image_data = meta['artwork'].first.data
        artwork = image_data
    except Exception as e:
        artwork = ''

    return {
        'album': meta['album'].value,
        'artist': meta['artist'].value,
        'title': meta['tracktitle'].value,
        'genre': meta['genre'].value,
        'filename': file,
        'artwork': artwork,
    }


def get_meta(folder, album_dest, file):
    """
    Get metadata from audio file
    and save the album artwork
    """

    if not os.path.isdir(album_dest):
        os.mkdir(album_dest)

    song = os.path.join(folder, file)
    meta = music_tag.load_file(song)
    # print(meta)
    # print('')

    try:
        filename = os.path.splitext(file)[0] + '.jpg'
        image_data = meta['artwork'].first.data
        image = Image.open(io.BytesIO(image_data))
        image = image.convert('RGB')
        image.thumbnail((300, 300), Image.ANTIALIAS)
        image.save(os.path.join(album_dest, filename))
        artwork = filename
    except (AttributeError, KeyError):
        artwork = ''

    return {
        'album': meta['album'].value,
        'artist': meta['artist'].value,
        'title': meta['tracktitle'].value,
        'genre': meta['genre'].value,
        'filename': file,
        'artwork': artwork,
    }


def create_dir(dir_path):
    try:
        os.makedirs(dir_path)
    except FileExistsError:
        pass
