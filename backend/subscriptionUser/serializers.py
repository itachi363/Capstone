from rest_framework import serializers
from .models import Comment

class SubUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'subscription']