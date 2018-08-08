from django.shortcuts import render
from todo.models import todo
from todo.serializers import LeadSerializer
from rest_framework import generics
# Create your views here.

class todoListCreate(generics.ListCreateAPIView):
	queryset = todo.objects.all()
	serializer_class = LeadSerializer
