from django.http import HttpResponse, response
from django.shortcuts import render, redirect

from JQXM.models import swiper, User


def index(request):
    username = request.COOKIES.get('username')
    lunbo=swiper.objects.all()
    return render(request, 'index.html',{'lunbo':lunbo})

# def swiper(request):
#     return render(request,'swiper.html',context={'swiper':swiper})
#
# def Login(request):
#     return render(request,'Login.html')
#
# def shopCar(request):
#     return render(request,'shopcar.html')

# def details(request):
#     return render(request,'details.html')

def register(request):
    if request.method == 'GET':
        return  render(request,'register.html')
    elif request.method == 'POST':
        user = User()
        user.email = request.POST.get('email')
        user.username = request.POST.get('username')
        user.password = request.POST.get('password')
        user.passwords = request.POST.get('passwords')
        user.save()

        response = redirect('JX:index')
        response.set_cookie('username',user.username)

        return response


def logout(request):
    response = redirect('mt:index')
    response.delete_cookie('username')
    return response