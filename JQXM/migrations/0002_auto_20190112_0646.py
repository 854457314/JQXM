# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-12 06:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JQXM', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='swiper',
            name='name',
            field=models.CharField(default=1, max_length=10),
        ),
        migrations.AlterField(
            model_name='swiper',
            name='trackid',
            field=models.CharField(default=1, max_length=10),
        ),
    ]