from django.urls import path
from . import views


urlpatterns = [
    path('', views.test),
    path('register/', views.register_user),
    path('login/', views.login_user),
    path('logout/', views.logout_user),
    path('edit_user/', views.edit_user),
    path('delete_user/', views.delete_user),
    path('profile/', views.user_profile),
    path('criar_aluno/', views.criar_aluno),
    path('buscar_aluno/<int:id>', views.buscar_aluno),
]