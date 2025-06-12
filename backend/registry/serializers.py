from rest_framework import serializers
from .models import User, Aluno


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        

class AlunoSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = '__all__'