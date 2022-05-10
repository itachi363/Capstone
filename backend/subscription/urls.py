from django.urls import path
from . import views



urlpatterns = [
	path('', views.get_all_subs),
	path('auth/', views.user_sub),
	path('<int:pk>/', views.user_sub_update)
]