from servicio.views import  MantenimientoDeleteView, MantenimientoUpdateView, ServicioDeleteView, TallerDeleteView, TallerUpdateView, TallerView,ServicioView,MantenimientoView,ServicioUpdateView
from django.urls import path



urlpatterns = [
    path("servicio/", ServicioView.as_view(),name="servicio_view"),
    path("servicio/<int:id>/", ServicioUpdateView.as_view(), name="servicio-update"),
    path("servicioDelete/<int:id>/", ServicioDeleteView.as_view(),name="delete"),
    path("mantenimiento/", MantenimientoView.as_view(),name="mantenimiento_view"),
    path("mantenimiento_Update/<int:id>/", MantenimientoUpdateView.as_view(), name="mantenimiento-update"),
    path("mantenimiento_delete/<int:id>/", MantenimientoDeleteView.as_view(),name="mantenimiento-delete"),
    path("taller/", TallerView.as_view(),name="taller_view"),
    path("taller_update/<int:id>/", TallerUpdateView.as_view(), name="taller-update"),
    path("taller_delete/<int:id>/", TallerDeleteView.as_view(), name="taller-delete")
]
