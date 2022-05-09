from rest_framework import serializers
from .models import Comment

class SubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'subscription', 'payment_amount']