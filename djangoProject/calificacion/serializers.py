from rest_framework import serializers
from .models import Calificacion,Recibo

#estructura

       
class CalificacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calificacion
        fields = ["id_usuario","id_taller","calificacion","comentario"]
    
       
class ReciboSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recibo
        fields = ["id_usuario","id_servicio","id_mantenimiento","tarea_completada","fecha","monto"]
    
    