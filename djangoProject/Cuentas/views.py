from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status


# Create your views here.

class RegistroView(APIView):
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if User.objects.filter(username=username).exists():
            return Response({'error':'El usuario ya existe, ingresar otro usuario',},status=status.HTTP_400_BAD_REQUEST)
        
        nuevo_usuario = User.objects.create_user(username=username,password=password)
        return Response({'success':'Usuario creado correctamente'},status=status.HTTP_201_CREATED)
        
        
class LoginView(APIView):
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        # verificacion  del correo y la contrasena
        user = authenticate(username=username, password=password)
        
        if User is not None:
            token, created = Token.objects.get_or_create(user=user)           
            return Response({'token':token.key}, status=status.HTTP_200_OK)
        else: 
            return Response({'error':'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)  # si las credencias son incorrectas devuelve un mensaje de error "json"
        
        
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