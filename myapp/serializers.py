from rest_framework import serializers
from .models import Appointment
from .models import User

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'name', 'date', 'reason', 'location', 'phone', 'description']
        read_only_fields = ('user',)  

 

class UserSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User
        fields = ['id', 'name', 'accountBalance', 'account_type']

