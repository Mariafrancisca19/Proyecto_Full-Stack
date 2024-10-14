from servicio.views import ServicioDeleteView, TallerView,ServicioView,MantenimientoView,ServicioUpdateView
from django.urls import path



urlpatterns = [
    path("taller/", TallerView.as_view(),name="taller_view"),
    path("servicio/", ServicioView.as_view(),name="servicio_view"),
    path("servicioDelete/<int:id>/", ServicioDeleteView.as_view(),name="delete"),
    path("mantenimiento/", MantenimientoView.as_view(),name="mantenimiento_view"),
    path("servicio/<int:id>/", ServicioUpdateView.as_view(), name="servicio-update"),
]
