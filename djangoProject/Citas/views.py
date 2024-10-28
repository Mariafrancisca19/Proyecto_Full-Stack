from django.shortcuts import render
from rest_framework import generics
from .models import AgendarCita
from .serializers import AgendarCitaSerializers
# Create your views here.

# logica 
class AgendarCitaView(generics.ListCreateAPIView):
    queryset = AgendarCita.objects.all()
    serializer_class = AgendarCitaSerializers
    
# actualizacion para agendar citas  utilizando un updateapiview
class AgendarCitaUpdateView(generics.UpdateAPIView):
     queryset = AgendarCita.objects.all()    # todos los datos que contiene el modelo de agendarcitas
     serializer_class = AgendarCitaSerializers # actualizacion y trasforma los datso enviados a la solicitud
     lookup_field = "id"  #actualizacion por el id
     
class AgendarCitaDeleteView(generics.DestroyAPIView):
# eliminar un servicio por medio del id
     queryset = AgendarCita.objects.all()
     serializer_class = AgendarCitaSerializers
     lookup_field = "id"
     # permission_classes=[IsAuthenticated]
