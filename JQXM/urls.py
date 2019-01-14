from django.conf.urls import url

from JQXM import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index/$', views.index, name='home'),
    # url(r'^swiper/$',views.swiper,name='swiper',)
    url(r'^register/$', views.register, name='register'),
    url(r'^Login/$', views.Login, name='Login'),
    # url(r'^logout/$', views.logout, name='logout'),
    # url(r'^shopCar/$',views.shopCar,name='shopCar'),
    # url(r'^details/$',views.details,name='details'),
    # url(r'^base/$',views.base,name='base'),
]
