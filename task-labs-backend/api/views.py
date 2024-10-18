from django.shortcuts import render
from .models import WorkHour
from rest_framework import viewsets
from .serializers import WorkHoursSerializer

# Create your views here.
from django.http import JsonResponse

class WorkHoursViewSet(viewsets.ModelViewSet):
    queryset = WorkHour.objects.all()
    serializer_class = WorkHoursSerializer