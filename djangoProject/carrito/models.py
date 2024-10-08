from django.db import models

# Create your models here.

class Servicio(models.Model):
    nombre = models.CharField(max_length=60)
    precio = models.IntegerField()
    descripcion = models.TextField(blank=False)
    imagen = models.ImageField()