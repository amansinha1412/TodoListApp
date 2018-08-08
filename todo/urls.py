from django.urls import path
from . import views
urlpatterns = [
    path('api/calendar', views.todoListCreate.as_view() ),
]