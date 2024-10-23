from Citas.views import AgendarCitaView
from django.urls import path

urlpatterns = [
  path("Agendar_Cita/", AgendarCitaView.as_view(),name="cita_view"),    
    
    
]