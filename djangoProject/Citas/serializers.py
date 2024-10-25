from rest_framework import serializers
from .models import AgendarCita
from servicio.serializers import ServicioSerializer
# estructura 

class AgendarCitaSerializers(serializers.ModelSerializer):
    servicio_nombre = serializers.CharField(source='servicio.tipo', read_only=True)  #Entre las comilas esta la relacion del modelo de donde viene la info y que atributo quiero
    usuario_nombre = serializers.CharField(source='usuario.user.username', read_only=True) 
    # Se crean dos variables que hacen referencia al tipo del servicio y al nombre del usuario
    # Estos datos se relacionan con el id que ya se guarda en la BD, se toma la relacion de id y la tabla  
    class Meta:
        model = AgendarCita
        fields = ['id', 'usuario', 'descripcion_cita', 'servicio', 'fecha', 'estado', 'servicio_nombre', 'usuario_nombre']
        # Los cambos que se van a mostrar dentro de la estructura del modelo