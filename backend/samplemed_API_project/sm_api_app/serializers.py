from rest_framework.serializers import ModelSerializer
from .models import Article
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'description']


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        # https://www.django-rest-framework.org/api-guide/serializers/#additional-keyword-arguments
        extra_kwards = {'passwords':{
            'write_only': True,
            'required': True
        }}
    # overwrite user create
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user