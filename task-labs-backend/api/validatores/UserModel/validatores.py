from django.core.exceptions import ValidationError

def validate_name(name):
    if name == '' or not name:
        return ValidationError('Name cannot be blank.')

    if len(name) > 30:
        return ValidationError('Name cannot exceed 30 characters.')

def validate_email(email):
    if len(email) > 255:
        return ValidationError('Email cannot exceed 255 characters.')

def validate_password(password):
    if len(password) > 20:
        return ValidationError('Password cannot exceed 20 characters.')