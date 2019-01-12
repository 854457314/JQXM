from django.shortcuts import render

from JQXM.models import swiper


def index(request):
    lunbo=swiper.objects.all()
    return render(request, 'index.html',{'lunbo':lunbo})

# def swiper(request):
#     return render(request,'swiper.html',context={'swiper':swiper})

def Login(request):
    return render(request,'Login.html')

def shopCar(request):
    return render(request,'shopcar.html')

def details(request):
    return render(request,'details.html')

def register(request):
    return render(request,'register.html')

def base(request):
    return render(request,'public.html')