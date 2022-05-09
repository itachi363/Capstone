from django.urls import path
from . import views



urlpatterns = [
	path('sub_user/', views.get_all_sub_user),
	path('sub_user/auth/', views.user_sub_user),
	path('sub_user/<int:pk>/', views.user_sub_user_update)