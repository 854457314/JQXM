from django.db import models

class swiper(models. Model):
    img=models.CharField(max_length=256)
    name = models.CharField(max_length=10,default=1)
    trackid = models.CharField(max_length=10,default=1)

class User(models.Model):
    email = models.CharField(max_length=20,unique=True)
    username = models.IntegerField()
    password = models.CharField(max_length=20)
    phone = models.CharField(max_length=20,unique=True)
    img = models.CharField(max_length=40)
    # 等级
    rank = models.IntegerField(default=1)
    # 令牌
    token = models.CharField(max_length=256)

    # class  Meta:
    #     de_table = 'JQXM_user'
