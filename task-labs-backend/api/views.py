from django.shortcuts import render
from .models import User, Profile, WorkHour
from rest_framework import viewsets
from .serializers import UserSerializer, MyTokenObtainPairSerializer, RegisterUserSerializer, WorkHoursSerializer
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response

# Create your views here.
from django.http import JsonResponse

class MyTokenObainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = ([AllowAny])
    serializer_class = RegisterUserSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if  request.method == 'GET':
        response = f"Hey {request.user}, You are seeing a GET response"
        return Response({'response': response}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get("text")
        response = f"Hey {request.user}, your text is {text}"
        return Response({'response': response}, status=status.HTTP_200_OK)
    return Response({}, status=status.HTTP_400_BAD_REQUEST)


class WorkHoursViewSet(viewsets.ModelViewSet):
    queryset = WorkHour.objects.all()
    serializer_class = WorkHoursSerializer


# class CreateUserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.validate(serializer.data), status=status.HTTP_400_BAD_REQUEST)