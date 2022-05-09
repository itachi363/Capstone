from django.db import models
from authentication.models import User
from subscription.models import Subscription

# Create your models here.

class SubUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subscription = models.ForeignKey(Subscription, on_delete=models.CASCADE)