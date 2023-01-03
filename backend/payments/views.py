from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Order


@csrf_exempt
def receive_order(request):
	if request.method == 'POST':
		data = json.loads(request.body.decode('utf-8'))
		Order.objects.create(**data)
	return JsonResponse({'success': True})