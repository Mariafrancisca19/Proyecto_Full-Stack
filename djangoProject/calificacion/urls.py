from calificacion.views import CalificacionView,ReciboView
from django.urls import path



urlpatterns = [
    path("calificacion/", CalificacionView.as_view(),name="calificacion_view"),
    path("recibo/",ReciboView.as_view(),name="recibo_view"),
       
]