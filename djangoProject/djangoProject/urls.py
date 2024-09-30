from django.contrib import admin
from django.urls import path,include
from Cuentas.views import RegistroView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/registro/', RegistroView.as_view()),
    path('api/',include('automoviles.urls'))
    
]
