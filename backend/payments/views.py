from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Order, CheckoutInitiated


@csrf_exempt
def receive_order(request):
	if request.method == 'POST':
		data = json.loads(request.body.decode('utf-8'))
		Order.objects.create(
			email=data['email'], 
			name=data['name'],
			transaction_id=data['transaction_id'],
		)
	return JsonResponse({'success': True})


@csrf_exempt
def checkout_initiated(request):
	if request.method == 'POST':
		data = json.loads(request.body.decode('utf-8'))
		CheckoutInitiated.objects.create(
			email=data['email'], 
			name=data['name'],
		)
	return JsonResponse({'success': True})