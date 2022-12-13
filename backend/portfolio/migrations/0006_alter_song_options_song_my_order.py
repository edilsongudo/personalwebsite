# Generated by Django 4.0.2 on 2022-12-15 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0005_alter_song_options_song_show'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='song',
            options={'ordering': ['my_order', 'show', 'title']},
        ),
        migrations.AddField(
            model_name='song',
            name='my_order',
            field=models.PositiveIntegerField(db_index=True, default=0),
        ),
    ]
