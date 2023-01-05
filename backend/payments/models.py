from django.db import models
from django.utils import timezone


class Order(models.Model):
	name = models.CharField(max_length=100, blank=True)
	email = models.EmailField(max_length=100, blank=True)
	transaction_id = models.CharField(max_length=20)

	def __str__(self):
		return self.email


class CheckoutInitiated(models.Model):
	name = models.CharField(max_length=100, blank=True)
	email = models.EmailField(max_length=100, blank=True)
	date = models.DateTimeField(default=timezone.now)

	def __str__(self):
		return self.email
