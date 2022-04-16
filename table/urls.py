from django.urls import path

from . import views

urlpatterns = [
    path('', views.TableListView.as_view(), name='home'),
]