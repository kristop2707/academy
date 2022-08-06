from django.urls import path
from .views import en
from . import views

from django.http import HttpResponse
from django.shortcuts import render
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
urlpatterns = [
    path('', views.index),
    path('en.html', views.en, name='en'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

