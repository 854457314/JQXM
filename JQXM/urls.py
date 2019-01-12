from django.conf.urls import url

from JQXM import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    # url(r'^swiper/$',views.swiper,name='swiper',)
    # url(r'^Login/$',views.Login,name='Login'),
    # url(r'^shopCar/$',views.shopCar,name='shopCar'),
    # url(r'^details/$',views.details,name='details'),
    # url(r'^register/$',views.register,name='register'),
    # url(r'^base/$',views.base,name='base'),
]
