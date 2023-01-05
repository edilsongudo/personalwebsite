from django.contrib import admin
from .models import Order, CheckoutInitiated


admin.site.register(Order)
admin.site.register(CheckoutInitiated)