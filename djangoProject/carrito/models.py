from django.db import models


# Create your models here.
# datos 
class Servicio(models.Model):
    nombre = models.CharField(max_length=60)
    categoria = models.CharField(max_length=35)
    precio = models.IntegerField()
    # descripcion = models.TextField(blank=False)
    # imagen = models.ImageField()
    
    