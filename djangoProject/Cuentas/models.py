from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Usuario(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    fecha_creacion = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.user.username
   