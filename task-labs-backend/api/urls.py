from django.urls import path, include
from api import views
from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView

router = routers.DefaultRouter()

urlpatterns = [
    path('token/', views.MyTokenObainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('register/', views.RegisterUserView.as_view()),
    path('dashboard/', views.dashboard),
    path('', include(router.urls)),
]