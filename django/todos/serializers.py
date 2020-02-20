from rest_framework import serializers
from .models import Todo


# modelのデータをシリアライズ（JSONに変換）
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'body',)