from django.db import models

# Create your models here.

class Subscription(models.Model):
    subscription = models.CharField(max_length=255)
    payment_amount = models.IntegerField()
