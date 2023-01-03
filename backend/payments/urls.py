from django.urls import path

from .views import receive_order

urlpatterns = [
    path('order/receive/', receive_order, name='receive_order'),
]
