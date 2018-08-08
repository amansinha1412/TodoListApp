from rest_framework import serializers
from todo.models import todo
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = todo
        fields = ('created_at', 'message', 'date_for')