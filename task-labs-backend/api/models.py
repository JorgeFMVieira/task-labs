from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password
from django.utils.translation import gettext_lazy as _

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db.models.signals import post_save

class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=300)
    bio = models.CharField(max_length=300)
    image = models.ImageField(default="default.jpg", upload_to="user_images")
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.full_name or f"Profile of {self.user.username}"
    

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)

class Company(models.Model):
    company = models.CharField(max_length=40, unique=True, null=False, blank=False)
    companyDescription = models.CharField(max_length=200, null=False, blank=False)  # No empty descriptions

    def __str__(self):
        return self.company


class CompanyOwner(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=False)
    email = models.EmailField(max_length=60, null=False, blank=False)  # EmailField is better for emails

    def __str__(self):
        return f'{self.email} (Owner of {self.company})'


class CompanyGrade(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=False)
    grade = models.CharField(max_length=30, null=False, blank=False)
    gradeName = models.CharField(max_length=60, null=False, blank=False)

    def __str__(self):
        return f'{self.gradeName} ({self.grade})'


class UserCompany(models.Model):
    email = models.EmailField(max_length=30, null=False, blank=False)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=False)
    grade = models.ForeignKey(CompanyGrade, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return f'{self.email} - {self.company} ({self.grade})'


class WorkHour(models.Model):
    begin_date = models.DateTimeField(null=False, blank=False)
    end_date = models.DateTimeField(null=False, blank=False)
    location = models.CharField(max_length=200, null=False, blank=False)

    def clean(self):
        super().clean()

        if not self.begin_date:
            raise ValidationError('Begin date cannot be empty.')

        if not self.end_date:
            raise ValidationError('End date cannot be empty.')

        if not self.location:
            raise ValidationError('Location cannot be empty.')

        if len(self.location) > 200:
            raise ValidationError('Location cannot exceed 200 characters.')

        if self.end_date < self.begin_date:
            raise ValidationError('End date must be after the begin date.')

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.location}: {self.begin_date} to {self.end_date}'
