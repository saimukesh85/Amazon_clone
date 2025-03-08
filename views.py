from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Products , AuthUser, Productimages
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from datetime import datetime
from django.db.models import Q
from django.contrib.auth import authenticate, login, logout

from django.contrib import messages
# Create your views here.
def index(request):
    if request.user.is_authenticated:
        greatings = "Welcome "+request.user.username
    else:
        greatings = "Hello , Sign in..."
    context = {
        'greatings' : greatings,
        'products' : Products.objects.all()
    }
   
    return render(request,"Amazon_app/Amazon_home.html",context)


def signout(request):
    logout(request)
    return redirect("index")

def signin(request):
    if request.method == 'POST':
        u_name = request.POST['email_or_username']
        u_password = request.POST.get('password')

        if not u_password:
            user=AuthUser.objects.filter(username = u_name)
            if user.exists():
                context = {
                    'username' : u_name,
                    'show_password_box' : True
                }
                return render(request,"Amazon_app/signin.html",context)
            else:
                context = {
                    'message' : "User not found.",
                    'u_action' : 'Create a Amazon account' 
                }
                return render(request,"Amazon_app/signin.html",context)
        else:
            user = authenticate(username=u_name,password=u_password)
            if user is not None:
                login(request,user)
                return redirect("index")
    return render(request,"Amazon_app/signin.html")


def add_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['mail']
        password = request.POST['password1']
        is_seller = request.POST['is_seller']
        first_name = request.POST['name']
        customer=AuthUser.objects.filter(username=username)
        if customer.exists():
            
            return render(request,"Amazon_app/register.html")
        user = AuthUser(username=username,email=email,password=make_password(password),is_seller=is_seller,date_joined=datetime.now().strftime("%Y-%m-%d %H:%M"),last_login=datetime.now().strftime("%Y-%m-%d %H:%M"),first_name=first_name)
        user.save()
        return redirect("signin")
    return render(request,"Amazon_app/register.html")

def SellerAcc(request):
    context = {
        'seller_name' : request.user.username,
        'products' : Products.objects.filter(user = request.user)
    }
    return render(request,"Amazon_app/seller_page.html",context)

def add_product(request):
    if request.method == "POST":
        user = request.user
        product_title = request.POST['pro-title']
        brand = request.POST['brand']
        category = request.POST['category']
        quantity = request.POST['quantity']
        actual_price = request.POST['price']
        sale_price = request.POST['sale-price']
        main_image = request.FILES['main-image']
        additional_image = request.FILES.getlist('additional-images')
        
        bullet_points = request.POST['bullet-points']
        description = request.POST['description']
        color = request.POST['color']
        weight = request.POST['weight']

        product = Products(user=user,product_title=product_title,brand_name=brand,category=category,quantity=quantity,actual_price=actual_price,selling_price=sale_price,main_img=main_image,key_features=bullet_points,discription=description,color=color,weight=weight)
       

        product.save()
        for img in additional_image:
            Productimages.objects.create(product_id=product,image=img)
        return redirect("seller")
    return render(request,"Amazon_app/add_product_form.html")

def cart(request):
    if request.user.is_authenticated:
        greatings = "Welcome "+request.user.username
    else:
        greatings = "Hello , Sign in..."
    context = {
        'greatings' : greatings,
        'products' : Products.objects.all()
    }
    return render(request,"Amazon_app/cart.html",context)