from django.urls import path
from . import views



urlpatterns = [
	path('sub/', views.get_all_subs),
	path('sub/auth/', views.user_sub),
	path('sub/<int:pk>/', views.user_sub_update)
]