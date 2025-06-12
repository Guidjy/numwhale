from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    
    def __str__(self):
        return self.username
    

class Aluno(models.Model):
    numero = models.IntegerField(null=True, default=0)
    nome = models.CharField(max_length=50)
    