from rest_framework import serializers
from .models import Subscription

class SubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = ['id', 'subscription', 'payment_amount']