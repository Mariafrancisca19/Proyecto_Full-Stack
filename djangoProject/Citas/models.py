from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class AgendarCita(models.Model):
    usuario = models.ForeignKey('Cuentas.Usuario', on_delete=models.CASCADE)
    descripcion_cita = models.TextField()
    servicio = models.ForeignKey('servicio.Servicio',on_delete=models.CASCADE)
    fecha = models.DateField()
    estado = models.BooleanField(default=False)