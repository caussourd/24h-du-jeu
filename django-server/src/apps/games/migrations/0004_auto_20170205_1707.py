# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-02-05 17:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0003_auto_20170108_1700'),
    ]

    operations = [
        migrations.AddField(
            model_name='invite',
            name='is_expired',
            field=models.BooleanField(default=False, verbose_name='Expir\xe9'),
        ),
        migrations.AlterField(
            model_name='user',
            name='known_games',
            field=models.ManyToManyField(blank=True, related_name='knowers', through='games.Knower', to='games.Game', verbose_name='Jeux connus'),
        ),
        migrations.AlterField(
            model_name='user',
            name='owned_games',
            field=models.ManyToManyField(blank=True, related_name='owners', through='games.Owner', to='games.Game', verbose_name='Jeux poss\xe9d\xe9s'),
        ),
    ]