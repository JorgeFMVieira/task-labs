from django.shortcuts import render
from .models import User, WorkHour
from rest_framework import viewsets
from .serializers import UserSerializer, WorkHoursSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
from django.http import JsonResponse

class WorkHoursViewSet(viewsets.ModelViewSet):
    queryset = WorkHour.objects.all()
    serializer_class = WorkHoursSerializer


class CreateUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.validate(serializer.data), status=status.HTTP_400_BAD_REQUEST)