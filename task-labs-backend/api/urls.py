from django.urls import path, include
from .views import CreateUserViewSet, WorkHoursViewSet
from rest_framework import routers

from . import views

router = routers.DefaultRouter()

router.register(r'workhours', WorkHoursViewSet)
router.register(r'createuser', CreateUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]