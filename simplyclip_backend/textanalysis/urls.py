from django.urls import path
from . import views


urlpatterns = [
    path('summarize', views.summarize, name = "summarize"),
    path('/upload', views.upload, name="upload"),
    path('/summarize/<str:summ_input>', views.fetch, name="fetch"),
]

