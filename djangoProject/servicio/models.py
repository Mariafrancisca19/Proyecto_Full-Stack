from django.db import models

# Create your models here.

class Taller(models.Model):
    id_servicio =  models.ForeignKey("servicio.Servicio",on_delete=models.CASCADE)
    nombre_taller = models.CharField(max_length=50)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=15)
    
    
class Servicio(models.Model):
    id_taller =  models.ForeignKey("servicio.Taller",on_delete=models.CASCADE)
    tipo = models.CharField(max_length=50)
    fecha_inicio_mantenimiento = models.DateField()
    fecha_fin_Mantenimiento = models.DateField()
    # imagen = models.ImageField()
    
    
class Mantenimiento(models.Model):
    id_automovil =  models.ForeignKey("automoviles.automovil",on_delete=models.CASCADE)
    nombre_taller = models.CharField(max_length=50)
    id_tipo =  models.ForeignKey("servicio.Servicio",on_delete=models.CASCADE)
    descripcion =  models.TextField(blank=False)
    

