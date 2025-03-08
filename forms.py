from django import forms
from .models import AuthUser , Products
from django.contrib.auth.forms import UserCreationForm

class UserForm(forms.ModelForm):
    email = forms.EmailField(required=True)
    
    class Meta:
        model = AuthUser
        fields=['username','email','password1','password2','is_seller','first_name']     




