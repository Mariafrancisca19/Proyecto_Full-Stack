from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from Cuentas.models import Usuario


# Create your views here.

class RegistroView(APIView):
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if User.objects.filter(username=username).exists():
            return Response({'error':'El usuario ya existe, ingresar otro usuario',},status=status.HTTP_400_BAD_REQUEST)
        
        nuevo_usuario = User.objects.create_user(username=username,password=password)
        Usuario.objects.create(user=nuevo_usuario)
        return Response({'success':'Usuario creado correctamente'},status=status.HTTP_201_CREATED)
        
class RegistroAdminView(APIView):   # registro para el super usuario
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if User.objects.filter(username=username).exists():
            return Response({'error':'El usuario ya existe, ingresar otro usuario',},status=status.HTTP_400_BAD_REQUEST)
        else:
            nuevo_usuario = User.objects.create_superuser(username=username,password=password)
            Usuario.objects.create(user=nuevo_usuario)
            return Response({'success':'Superusuario creado correctamente'},status=status.HTTP_201_CREATED)
        
    
class LoginView(APIView):
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        # verificacion  del correo y la contrasena
        user = authenticate(username=username, password=password)
        
        if User is not None:
            refresh = RefreshToken.for_user(user)  #Generar nuevos token de acceso sin que el usuario tenga auntenticacion de nuevo
            token, created = Token.objects.get_or_create(user=user)    # busca un token para el usuario y si no existe, lo crea    
            return Response({'id_usuario':user.id,'token':token.key,'token_d_acceso':str(refresh.access_token),'token_d_refresco':str(refresh),'superuser':user.is_superuser}, status=status.HTTP_200_OK)  # si la autenticacion es correcta de vuelve un "http_200_ok , solicitud exitosa"
        else: 
            return Response({'error':'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)  # si las credencias son incorrectas devuelve un error con los datos 
        
        
        # Nota importante : Recordar --> 
        # Se envía una solicitud POST con las credenciales (nombre de usuario y contraseña) al endpoint de login.
        # Se intenta autenticar al usuario:
        # Si las credenciales son válidas, se devuelve un token de autenticación.
        # Si las credenciales son inválidas, se devuelve un mensaje de error con un código de estado HTTP 400.
        
        
        # Token.objects.get_or_create(user=user) EL Busca si el usuario ya tiene un token de autenticación.
        # Si el token ya existe, lo recupera (no lo crea nuevamente).
        # Si no existe, lo crea para ese usuario.
        # token.key: token que se usa en futuras solicitudes para autenticar al usuario.
        # Response({'token': token.key}, status=status.HTTP_200_OK): 
        # Si la autenticación es exitosa, devuelve una respuesta con el token del usuario y
        # un código de estado HTTP 200, indicando que todo salió bien.
        
#         Códigos 2xx – Éxito
# Estos códigos indican que la solicitud fue procesada correctamente.

# 200 OK: La solicitud se completó exitosamente.
# 201 Created: El recurso fue creado con éxito. Común en respuestas a solicitudes POST.
# 204 No Content: La solicitud se completó correctamente, pero no hay contenido que devolver en la respuesta. Usado en DELETE o PUT.
# Códigos 3xx – Redirecciones
# Estos códigos indican que el cliente necesita tomar acciones adicionales, como seguir una redirección.

# 301 Moved Permanently: El recurso solicitado ha sido movido de forma permanente a una nueva URL.
# 302 Found: El recurso está temporalmente disponible en una URL diferente.
# 304 Not Modified: El recurso no ha cambiado desde la última solicitud. Usado en verificaciones de caché.
# Códigos 4xx – Errores del cliente
# Los errores de cliente ocurren cuando el servidor no puede procesar una solicitud debido a problemas del lado del cliente, como una solicitud malformada, credenciales incorrectas o un recurso inexistente.

# 1. 400 Bad Request
# Descripción: La solicitud está malformada o contiene datos incorrectos. Por ejemplo, un error en la sintaxis de un JSON enviado en un POST o PUT.
# Causas comunes:
# Parámetros faltantes.
# Sintaxis incorrecta en la solicitud.
# Datos no válidos.
# 2. 401 Unauthorized
# Descripción: El cliente no está autenticado o no ha proporcionado credenciales válidas.
# Causas comunes:
# Falta de un token de autenticación (como un JWT).
# Token de autenticación caducado o inválido.
# 3. 403 Forbidden
# Descripción: El servidor entiende la solicitud, pero el cliente no tiene permiso para acceder al recurso solicitado.
# Causas comunes:
# Intentar acceder a un recurso sin los permisos adecuados (aunque esté autenticado).
# Restricciones a nivel de usuario o roles.
# 4. 404 Not Found
# Descripción: El recurso solicitado no existe en el servidor.
# Causas comunes:
# La URL solicitada es incorrecta o el recurso no está disponible.
# Intentar acceder a un endpoint que no existe en la API.
# 5. 405 Method Not Allowed
# Descripción: El método HTTP utilizado no está permitido para el recurso solicitado. Por ejemplo, intentar hacer un GET en una ruta que solo admite POST.
# Causas comunes:
# Usar el método equivocado en una ruta (como enviar POST cuando solo se admite GET).
# La ruta no tiene el método correspondiente implementado.
# 6. 409 Conflict
# Descripción: Hay un conflicto en el servidor al intentar procesar la solicitud. Por ejemplo, al intentar crear un recurso que ya existe.
# Causas comunes:
# Intentar crear un registro con datos duplicados.
# Conflictos de concurrencia en actualizaciones.
# 7. 422 Unprocessable Entity
# Descripción: El servidor entiende la solicitud, pero no puede procesar los datos enviados. Esto ocurre, por ejemplo, cuando los datos enviados son correctos en formato pero no son válidos para la operación.
# Causas comunes:
# Validaciones fallidas en los datos.
# Intentar crear un recurso con datos incompletos o incorrectos.
# Códigos 5xx – Errores del servidor
# Los errores de servidor ocurren cuando el servidor falla al procesar una solicitud válida debido a problemas internos. Estos errores indican que algo no está funcionando correctamente en el lado del servidor.

# 1. 500 Internal Server Error
# Descripción: El servidor encontró una condición inesperada que le impidió cumplir con la solicitud. Es un error genérico y puede tener muchas causas.
# Causas comunes:
# Errores en el código del servidor.
# Excepciones no manejadas.
# Fallos en bases de datos o servicios externos.
# 2. 502 Bad Gateway
# Descripción: El servidor actuando como un gateway o proxy recibió una respuesta inválida de un servidor upstream. Esto indica que hay un problema en la cadena de servidores.
# Causas comunes:
# El servidor upstream (otro servidor que maneja parte de la solicitud) no está respondiendo o está enviando respuestas no válidas.
# Problemas de conectividad entre servidores.
# 3. 503 Service Unavailable
# Descripción: El servidor no está disponible temporalmente, posiblemente debido a sobrecarga o mantenimiento.
# Causas comunes:
# El servidor está sobrecargado y no puede manejar más solicitudes.
# Mantenimiento o actualización en curso.
# 4. 504 Gateway Timeout
# Descripción: El servidor actuando como gateway o proxy no recibió una respuesta oportuna del servidor upstream. Esto ocurre cuando un servidor no responde a tiempo.
# Causas comunes:
# El servidor upstream está lento o no responde.
# Problemas de red entre los servidores.
# 5. 507 Insufficient Storage
# Descripción: El servidor no puede completar la solicitud porque se ha quedado sin espacio en disco o no tiene suficiente almacenamiento para procesarla.
# Causas comunes:
# Falta de espacio en disco en el servidor.