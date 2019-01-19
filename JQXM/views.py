from django.http import HttpResponse, response
from django.shortcuts import render, redirect

from JQXM.models import swiper, User, Details, Shop


# def index(request):
#     username = request.COOKIES.get('username')
#     return render(request,'index.html',context={'username':username})

def index(request):
    username = request.COOKIES.get('username')
    lunbo=swiper.objects.all()
    data={
        'lunbo':lunbo,
        'username':username
    }
    return render(request, 'index.html',data)

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

    if request.method == 'GET':  # 获取注册页面
        print(request.method)
        return  render(request,'register.html')
    elif request.method == 'POST':  # 注册操作
        print(request.method)
        user =User()
        user.email = request.POST.get('email')
        user.username = request.POST.get('username')
        user.password = request.POST.get('password')
        user.passwords = request.POST.get('passwords')
        print(user.username)
        user.save()

        # 状态保持
        response = redirect('JX:index')
        response.set_cookie('username',user.username)

        return response


# def logout(request):
#     response = redirect('JX:index')
#     response.delete_cookie('username')
#     return response


def Login(request):
    if request.method == 'GET':
        return  render(request,'Login.html')
    elif request.method == 'POST':
        print(request.POST)
        return render(request,'index.html')


def details(request,id1):
    details = Details.objects.get(pk=id1)
    return render(request,'details.html',{'detail':details})


def logout(request):
    response = redirect('JX:index')
    response.delete_cookie('username')
    return response

def shop(request):
    shop = Shop.objects.all()
    return  render(request,'shop.html')


def shopCar(request):
    token = request.session.get('token')
    print('添加购物车')


    if token:
        pass
    else:
        return redirect('JX:Login')