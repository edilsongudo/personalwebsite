# Generated by Django 4.0.2 on 2022-05-07 06:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_song'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='artwork',
            field=models.ImageField(null=True, upload_to='albumArts'),
        ),
        migrations.AlterField(
            model_name='song',
            name='file',
            field=models.FileField(max_length=255, upload_to='audio'),
        ),
        migrations.AlterField(
            model_name='song',
            name='filename',
            field=models.CharField(max_length=255),
        ),
    ]