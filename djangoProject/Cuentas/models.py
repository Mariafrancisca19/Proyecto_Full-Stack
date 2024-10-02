from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Usuario(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    fecha_nacimiento = models.DateField(null=True,blank=True)
   