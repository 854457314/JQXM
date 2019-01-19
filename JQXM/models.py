from django.db import models

class swiper(models. Model):
    img=models.CharField(max_length=256)
    name = models.CharField(max_length=10,default=1)
    trackid = models.CharField(max_length=10,default=1)

class User(models.Model):
    email = models.CharField(max_length=20,unique=True)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=256)
    passwords = models.CharField(max_length=256)

class  Details(models.Model):
    hh= models.CharField(max_length=256)
    price = models.IntegerField()
    price2 = models.IntegerField()
    discount = models.CharField(max_length=40)
    img = models.CharField(max_length=256)



class  Shop(models.Model):
    name = models.CharField(max_length=20)

class  Shopcar(models.Model):
    user = models.ForeignKey(User)
    goods = models.ForeignKey(Shop)
    number = models.IntegerField()
    isselect = models.BooleanField(default=True)

    class Meta:
        db_table = 'JX_shopcar'

