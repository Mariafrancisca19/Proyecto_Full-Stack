from django.shortcuts import render
from rest_framework import generics
from .models import Taller,Servicio,Mantenimiento
from .serializers import TallerSerializer,ServicioSerializer,MantenimientoSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
# logica

class ServicioView(generics.ListCreateAPIView):
     queryset = Servicio.objects.all()
     serializer_class = ServicioSerializer

# actualizacion del servicio  utilizando un updateapiview
class ServicioUpdateView(generics.UpdateAPIView):
     queryset = Servicio.objects.all()    # todos los datos que contiene el modelo servicio
     serializer_class = ServicioSerializer # actualizacion y trasforma los datso enviados a la solicitud
     lookup_field = "id"  #actualizacion por el id

class ServicioDeleteView(generics.DestroyAPIView):
# eliminar un servicio por medio del id
     queryset = Servicio.objects.all()
     serializer_class = ServicioSerializer
     lookup_field = "id"
     # permission_classes=[IsAuthenticated]
     

class MantenimientoView(generics.ListCreateAPIView):
     queryset = Mantenimiento.objects.all()
     serializer_class = MantenimientoSerializer
     
class MantenimientoUpdateView(generics.UpdateAPIView):
     queryset = Mantenimiento.objects.all()
     serializer_class = MantenimientoSerializer
     lookup_field = 'id'
     
class MantenimientoDeleteView(generics.DestroyAPIView):
     queryset = Mantenimiento.objects.all()
     serializer_class = MantenimientoSerializer
     lookup_field = "id"
     # permission_classes=[IsAuthenticated]
     
     
class TallerView(generics.ListCreateAPIView):
     permission_classes = [AllowAny]
     queryset = Taller.objects.all()
     serializer_class = TallerSerializer
     
class TallerUpdateView(generics.UpdateAPIView):
     queryset = Taller.objects.all()
     serializer_class = TallerSerializer
     lookup_field = "id"
     
     
class TallerDeleteView(generics.DestroyAPIView):
     queryset = Taller.objects.all()
     serializer_class = TallerSerializer
     lookup_field = "id"
     # permission_classes=[IsAuthenticated]