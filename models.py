from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class AuthUser(AbstractUser):
    is_seller = models.BooleanField(default=False)  # Your custom field

    class Meta:
        db_table = 'auth_user'  # Links to your modified auth_user table

    def __str__(self):
        return self.username
    



class Products(models.Model):
    
    user = models.ForeignKey(AuthUser, on_delete=models.CASCADE, db_column='user-id',related_name='products')  # Field name made lowercase.
    product_title = models.CharField(db_column='product-title', max_length=200)  # Field renamed to remove unsuitable characters.
    brand_name = models.CharField(db_column='brand-name', max_length=45, blank=True, null=True)  # Field renamed to remove unsuitable characters.
    category = models.CharField(max_length=45)
    quantity = models.IntegerField()
    actual_price = models.DecimalField(db_column='actual-price', max_digits=10, decimal_places=0)  # Field renamed to remove unsuitable characters.
    selling_price = models.DecimalField(db_column='selling-price', max_digits=10, decimal_places=0, blank=True, null=True)  # Field renamed to remove unsuitable characters.
    main_img = models.ImageField(upload_to='uploads/',db_column='main-img', max_length=255)  # Field renamed to remove unsuitable characters.
    # Field renamed to remove unsuitable characters.
    key_features = models.CharField(db_column='key-features', max_length=255)  # Field renamed to remove unsuitable characters.
    discription = models.CharField(max_length=255)
    color = models.CharField(max_length=45, blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'products'

class Productimages(models.Model):
    product_id = models.ForeignKey(Products, on_delete=models.CASCADE, db_column='product-id',related_name="Productimages")  # Field name made lowercase.
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    image = models.ImageField(upload_to="uploads/", max_length=255)

    class Meta:
        managed = False
        db_table = 'productimages'


class CartItems(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE, db_column='product-id')  # Field name made lowercase.
    user = models.ForeignKey(AuthUser, on_delete=models.CASCADE, db_column='user-id',related_name='cartitems')


    class Meta:
        managed = False
        db_table = 'cart_items'