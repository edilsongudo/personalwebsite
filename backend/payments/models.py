from django.db import models

# Create your models here.
class Order(models.Model):
	name = models.CharField(max_length=100, blank=True)
	email = models.EmailField(max_length=100, blank=True)
	transaction_id = models.CharField(max_length=20)