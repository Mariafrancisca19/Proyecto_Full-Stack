from django.shortcuts import render
from rest_framework import generics
from .models import Taller,Servicio,Mantenimiento
from .serializers import TallerSerializer,ServicioSerializer,MantenimientoSerializer

# logica 
class TallerView(generics.ListCreateAPIView):
     queryset = Taller.objects.all()
     serializer_class = TallerSerializer

class ServicioView(generics.ListCreateAPIView):
     queryset = Servicio.objects.all()
     serializer_class = ServicioSerializer
     
class MantenimientoView(generics.ListCreateAPIView):
     queryset = Mantenimiento.objects.all()
     serializer_class = MantenimientoSerializer

# eliminar un servicio por medio del id 
class ServicioDeleteView(generics.DestroyAPIView):
     queryset = Servicio.objects.all()
     serializer_class = ServicioSerializer
     lookup_field = "id"

# actualizacion del servicio  utilizando un updateapiview
class ServicioUpdateView(generics.UpdateAPIView):
     queryset = Servicio.objects.all()    # todos los datos que contiene el modelo servicio
     serializer_class = ServicioSerializer # actualizacion y trasforma los datso enviados a la solicitud
     lookup_field = "id"  #actualizacion por el id 
