from django.conf.urls import url

from JQXM import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    # url(r'^index/$',views.index,name='index'),
]
