from django.shortcuts import render
from rest_framework import generics
from .models import Automovil,Especificaciones
from .serializers import AutomovilSerializer,EspecificacionesSerializer

# logica 
# Create your views here.

class AutomovilView(generics.ListCreateAPIView):
    queryset = Automovil.objects.all()
    serializer_Class = AutomovilSerializer


class EspecificacionesView(generics.ListCreateAPIView):
     queryset = Especificaciones.objects.all()
     serializer_class = EspecificacionesSerializer
























