from rest_framework import serializers
from .models import WorkHour

class WorkHoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkHour
        fields = ('id', 'location', 'begin_date', 'end_date')