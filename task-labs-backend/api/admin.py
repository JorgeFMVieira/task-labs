from django.contrib import admin
from .models import User, Profile, Company, CompanyGrade, UserCompany, CompanyOwner, WorkHour

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']


class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['user', 'full_name', 'verified']

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Company)
admin.site.register(CompanyGrade)
admin.site.register(UserCompany)
admin.site.register(CompanyOwner)
admin.site.register(WorkHour)
