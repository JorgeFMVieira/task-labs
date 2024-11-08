from django.contrib import admin
from .models import User, Company, CompanyGrade, UserCompany, CompanyOwner, WorkHour

# Register your models here.
admin.site.register(User)
admin.site.register(Company)
admin.site.register(CompanyGrade)
admin.site.register(UserCompany)
admin.site.register(CompanyOwner)
admin.site.register(WorkHour)
