from rest_framework import serializers
from .models import Taller,Servicio,Mantenimiento

#estructura

class TallerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taller
        fields = "__all__"
        
        
class ServicioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Servicio
        fields = "__all__"

        
        
class MantenimientoSerializer(serializers.ModelSerializer):
    nombre_taller = serializers.CharField(source='id_taller.nombre_taller', read_only=True)
    nombre_servicio = serializers.CharField(source='id_tipo.tipo', read_only=True)
    
    class Meta:
        model = Mantenimiento
        fields = ['id','marca','modelo','anio','descripcion','id_taller','id_tipo','nombre_taller','nombre_servicio']
