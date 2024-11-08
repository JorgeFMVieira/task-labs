from rest_framework import serializers
from .models import User, WorkHour
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.core.exceptions import ValidationError as DjangoValidationError

class WorkHoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkHour
        fields = ('id', 'location', 'begin_date', 'end_date')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password')
    
    def validate(self, attrs):
        errors = {}

        email = attrs.get('email')
        if User.objects.filter(email=email).exists():
            errors = ["email_exists"]
        if email:
            try:
                validate_email(email)
            except DjangoValidationError:
                errors = ["email_invalid"]
        if not attrs.get('password'):
            errors = ["password_empty"]
        if not attrs.get('email'):
            errors = ["email_empty"]
        if not attrs.get('name'):
            errors = ["name_empty"]
        if len(attrs.get('password', '')) > 255:
            errors = ["password_maxlength"]
        if len(attrs.get('email', '')) > 255:
            errors = ["email_maxlength"]
        if len(attrs.get('name', '')) > 65:
            errors = ["name_maxlength"]

        # If there are any errors, raise a ValidationError
        if errors:
            raise serializers.ValidationError(errors)

        return attrs

    def create(self, validated_data):
        # Hash the password before creating the user
        validated_data['password'] = make_password(validated_data['password'])
        return User.objects.create(**validated_data)