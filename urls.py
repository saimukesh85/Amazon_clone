from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.index, name='index'),
    path('signin/',views.signin,name='signin'),
    path('register/',views.add_user,name='register'),
    path('signout/',views.signout,name='signout'),
    path('seller',views.SellerAcc,name='seller'),
    path('add-products',views.add_product,name='add-products'),
    path('cart/',views.cart,name='cart'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)