from rest_framework import serializers
from .models import Automovil,Especificaciones

# estructura 
# los serializers son una herramienta esencial en Django REST Framework
# que facilita la interacción entre los datos de los modelos de Django y 
# las representaciones JSON que se envían o reciben a través de APIs

class AutomovilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Automovil 
        fields = ["id_usuario","id_especificaciones"]
    
    
    
class EspecificacionesSerializer(serializers.ModelSerializer):
     class Meta:
        model = Especificaciones
        fields = ["marca","modelo","año","kilometraje","tipo_combustible"]
        
    
    
    
    
    
    
    
    
    
    
    
    
    # primero crear la carpeta
    # estructura de las tables en los models
    # crear el archivo de serializers.py
    
    # # Class AutomovilSerializer(serializers.ModelSerializer):
    
    # # Class Meta: 
    # # " model = Automovil   "  de donde queremos agarrar la informacion 
    # # " fields = ["nombre"]  "  que inormacion queremos agarrar 'lo que le mandamos con atribito en el modal de cada clase'
    
    # 3. trabajar desde las vistas