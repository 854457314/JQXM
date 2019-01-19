from django.conf.urls import url

from JQXM import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index/$', views.index, name='home'),
    url(r'^shop/$',views.shop,name='shop'),
    url(r'^register/$', views.register, name='register'),
    url(r'^Login/$', views.Login, name='Login'),
    url(r'^details/(\d{1,6})/$', views.details, name='details'),
    url(r'^logout/$',views.logout, name='logout'),
    url(r'^shopCar/$',views.shopCar,name='shopCar'),
    # url(r'^details/$',views.details,name='details'),
    # url(r'^base/$',views.base,name='base'),
]
