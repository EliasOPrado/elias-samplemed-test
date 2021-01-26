from django.urls import path, include
from .views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

# router 
router = DefaultRouter()
router.register(r'articles', ArticleViewSet, basename='articles')
router.register(r'users', UserViewSet, basename='users')

# this url will go in samplemed_API_project.urls under admin
urlpatterns = [
    path('', include(router.urls)),
]