from django.db import models
# datos
# Create your models here.

class Automovil(models.Model):
    # id_automovil
    id_usuario = models.ForeignKey("Cuentas.Usuario",on_delete=models.CASCADE)
    id_especificaciones = models.ForeignKey("automoviles.Especificaciones",on_delete=models.CASCADE)    # Entre las comillas en la llave foranea se coloca primero la app y luego el modelo 
                                                                                                        # ejemplo "automoviles.Especificaciones" automviles=app Especificaciones=modelo
    
class Especificaciones(models.Model):
    # id_combustible se auto genera solo
    marca = models.TextField(max_length=50)
    modelo = models.CharField(max_length=50)
    año = models.IntegerField()
    kilometraje = models.IntegerField()
    tipo_combustible = models.CharField(max_length=50)
    
    

    
    
    
    
    
    
    
    
    
    