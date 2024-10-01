from django.db import models

# Create your models here.

class Calificacion(models.Model):
    id_usuario = models.ForeignKey("Cuentas.Usuario",on_delete=models.CASCADE)
    id_taller = models.ForeignKey("servicio.Taller",on_delete=models.CASCADE)
    calificacion = models.IntegerField()
    comentario = models.TextField(blank=True)
    
class Recibo(models.Model):
    id_usuario = models.ForeignKey("Cuentas.Usuario",on_delete=models.CASCADE)
    id_servicio =  models.ForeignKey("servicio.Servicio",on_delete=models.CASCADE)
    id_mantenimiento =  models.ForeignKey("servicio.Mantenimiento",on_delete=models.CASCADE)
    tarea_completada = models.BooleanField(default=False)
    fecha = models.DateField()
    monto = models.DecimalField(max_digits=10, decimal_places=2)
