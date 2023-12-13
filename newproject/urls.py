from django.contrib import admin
from django.urls import path
from myapp.views import LoginView
from django.urls import path, include
#from rest_framework.routers import DefaultRouter
#from myapp.views import AppointmentViewSet

#router = DefaultRouter()
#router.register(r'appointments', AppointmentViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
    path('api/login/', LoginView.as_view(), name='api-login'),
]