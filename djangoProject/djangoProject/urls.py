
from django.urls import path,include
from Cuentas.views import RegistroView
from Cuentas.views import LoginView
from Cuentas.views import RegistroAdminView


urlpatterns = [
    path('api/registro/', RegistroView.as_view()),
    path('api/login/', LoginView.as_view()),
    path('api/registro-admin/', RegistroAdminView.as_view()),
    path('api/automoviles',include('automoviles.urls')),
    path('api/calificacion',include('calificacion.urls')),  
    path('api/',include('servicio.urls')),
]


# as.view () ---> son clases de python que contienen logica de las diferentes solicitudes HTTP "CRUD"
# son clases que convierten en una vista para manejar las solicitudes HTTP