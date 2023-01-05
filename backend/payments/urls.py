from django.urls import path

from .views import receive_order, checkout_initiated

urlpatterns = [
    path('order/receive/', receive_order, name='receive_order'),
    path('checkout/init/', checkout_initiated, name='checkout_initiated'),
]
