from rest_framework import serializers
from .models import SubUser

class SubUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubUser
        fields = ['id', 'user', 'subscription']
        depth = 1