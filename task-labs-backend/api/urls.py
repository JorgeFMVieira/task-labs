from django.urls import path, include
from .views import WorkHoursViewSet
from rest_framework import routers

from . import views

router = routers.DefaultRouter()

router.register(r'workhours', WorkHoursViewSet)

urlpatterns = [
    path('', include(router.urls)),
]