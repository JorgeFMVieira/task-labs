from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=50)


class WorkHour(models.Model):
    begin_date = models.DateTimeField()
    end_date = models.DateTimeField()
    location = models.CharField(max_length=200)
    
    def clean(self):
        super().clean()

        if not self.begin_date:
            raise ValidationError('Begin date cannot be empty')

        if not self.end_date:
            raise ValidationError('End date cannot be empty')
        
        if not self.location:
            raise ValidationError('Location cannot be empty.')
        
        if len(self.location) > 200:
            raise ValidationError('Location cannot exceed 200 characters.')

        if self.end_date < self.begin_date:
            raise ValidationError('End date must be after the begin date')
        

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

        
    def __str__(self):
        return f'{self.location}: {self.begin_date} to {self.end_date}'