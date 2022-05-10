from django.urls import path
from . import views



urlpatterns = [
	path('', views.get_all_sub_user),
	path('auth/', views.user_sub_user),
	path('<int:pk>/', views.user_sub_user_update)
]