# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-14 09:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JQXM', '0003_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='passwords',
            field=models.IntegerField(),
        ),
    ]