
from django.urls import path,include
from Cuentas.views import RegistroView
from Cuentas.views import LoginView

urlpatterns = [
    path('api/registro/', RegistroView.as_view()),
    path('api/',include('automoviles.urls')),
    path('api/',include('servicio.urls')),
    path('api/',include('calificacion.urls')),  
    path('api/login/', LoginView.as_view())
      
]


# as.view () ---> son clases de python que contienen logica de las diferentes solicitudes HTTP "CRUD"
# son clases que convierten en una vista para manejar las solicitudes HTTP