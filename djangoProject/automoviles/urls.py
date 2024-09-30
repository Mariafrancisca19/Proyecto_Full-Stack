# comunicacion
from automoviles.views import AutomovilView
from automoviles.views import EspecificacionesView
from django.urls import path


urlpatterns = [
    path("automoviles/", AutomovilView.as_view(),name="automoviles_view"),
     path("especificaciones/",EspecificacionesView.as_view(),name="especificaciones_view")
    
]
