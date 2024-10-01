from django.shortcuts import render
from rest_framework import generics
from .models import Calificacion,Recibo
from .serializers import CalificacionSerializer,ReciboSerializer
# Create your views here.


class CalificacionView(generics.ListCreateAPIView):
     queryset = Calificacion.objects.all()
     serializer_class = CalificacionSerializer


class ReciboView(generics.ListCreateAPIView):
     queryset = Recibo.objects.all()
     serializer_class = ReciboSerializer
