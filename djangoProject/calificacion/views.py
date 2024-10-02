from django.shortcuts import render
from rest_framework import generics
from .models import Calificacion,Recibo
from .serializers import CalificacionSerializer,ReciboSerializer
# Create your views here.
#  view manejar múltiples tipos de solicitudes del crud
# generics --->  herramientas poderosas que permiten a los desarrolladores 
# construir APIs RESTful de manera rápida y eficiente, al mismo tiempo 
# que mantienen un código limpio y organizado

# Permite listar todos los objetos y crear un nuevo objeto
# ya sea obteniendolo,actualizando o eliminando un objeto especifico


class CalificacionView(generics.ListCreateAPIView):
     queryset = Calificacion.objects.all()
     serializer_class = CalificacionSerializer


class ReciboView(generics.ListCreateAPIView):
     queryset = Recibo.objects.all()
     serializer_class = ReciboSerializer
