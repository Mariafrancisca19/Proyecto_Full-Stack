from rest_framework import serializers
from .models import AgendarCita

# estructura 

class AgendarCitaSerializers(serializers.ModelSerializer):
    class Meta:
        model = AgendarCita
        fields = "__all__"