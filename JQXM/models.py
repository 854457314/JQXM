from django.db import models

class swiper(models. Model):
    img=models.CharField(max_length=256)
    name = models.CharField(max_length=10,default=1)
    trackid = models.CharField(max_length=10,default=1)

