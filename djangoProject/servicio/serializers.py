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
    class Meta:
        model = Mantenimiento
        fields = "__all__"

    
    



    