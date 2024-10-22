import datetime
from django.db import models

# Create your models here.

class Taller(models.Model):
    nombre_taller = models.CharField(max_length=50)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=15)
    
    def __str__(self):
        return self.nombre_taller      
    
class Servicio(models.Model):
    id_taller =  models.ForeignKey("servicio.Taller",on_delete=models.CASCADE,default=2)
    tipo = models.CharField(max_length=50)
    imagen = models.TextField(default="https://images.pexels.com/photos/1699104/pexels-photo-1699104.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200")
    monto = models.FloatField(default=0)
    descripcion = models.TextField(default="El mejor arreglo")
#  Cuando imprimes una instancia de Servicio, se mostrará el valor del campo tipo y las fechas de inicio y fin del mantenimiento .ej: "Reparación (2024-01-01 - 2024-01-05)"
    def __str__(self):
        return self.tipo     
    
    
class Mantenimiento(models.Model):
    marca   = models.CharField(max_length=100,blank=True,null=True)
    modelo  = models.CharField(blank=True,null=True, max_length=100)
    anio = models.DateField(null=True, blank=True, default=datetime.date.today)  
    id_taller = models.ForeignKey(Taller,on_delete=models.CASCADE)
    id_tipo =  models.ForeignKey("servicio.Servicio",on_delete=models.CASCADE)
    descripcion =  models.TextField(blank=False)
    
