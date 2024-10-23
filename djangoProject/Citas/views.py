from django.shortcuts import render
from rest_framework import generics
from .models import AgendarCita
from .serializers import AgendarCitaSerializers
# Create your views here.

# logica 
class AgendarCitaView(generics.ListCreateAPIView):
    queryset = AgendarCita.objects.all()
    serializer_class = AgendarCitaSerializers
    