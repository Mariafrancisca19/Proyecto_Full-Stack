from Citas.views import AgendarCitaDeleteView, AgendarCitaUpdateView, AgendarCitaView
from django.urls import path

urlpatterns = [
  path("Agendar_Cita/", AgendarCitaView.as_view(),name="cita_view"),    
  path("cita_update/<int:id>/",AgendarCitaUpdateView.as_view(), name="cita-update"),
  path("cita_delete/<int:id>/", AgendarCitaDeleteView.as_view(),name="delete"), 
]