from servicio.views import TallerView,ServicioView,MantenimientoView
from django.urls import path



urlpatterns = [
    path("taller/", TallerView.as_view(),name="taller_view"),
    path("servicio/", ServicioView.as_view(),name="servicio_view"),
    path("mantenimiento/", MantenimientoView.as_view(),name="mantenimiento_view"),
   
]
