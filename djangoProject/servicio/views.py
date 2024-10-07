from django.shortcuts import render
from rest_framework import generics
from .models import Taller,Servicio,Mantenimiento
from .serializers import TallerSerializer,ServicioSerializer,MantenimientoSerializer

class TallerView(generics.ListCreateAPIView):
     queryset = Taller.objects.all()
     serializer_class = TallerSerializer

class ServicioView(generics.ListCreateAPIView):
     queryset = Servicio.objects.all()
     serializer_class = ServicioSerializer
     
class MantenimientoView(generics.ListCreateAPIView):
     queryset = Mantenimiento.objects.all()
     serializer_class = MantenimientoSerializer






