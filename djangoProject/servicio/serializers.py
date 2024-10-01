from rest_framework import serializers
from .models import Taller,Servicio,Mantenimiento

#estructura

class TallerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taller
        fields = ["id_servicio","nombre_taller","direccion","telefono"]
        
        
class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicio
        fields = ["id_taller","tipo","fecha_inicio_mantenimiento","fecha_fin_mantenimiento"]
        
        
class MantenimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mantenimiento
        fields = ["id_automovil","nombre_taller","id_tipo","descripcion"]
    
    



    