from django.db import models
from django.contrib.auth.models import User

class Appointment(models.Model):
    name = models.CharField(max_length=100, default='N/A')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    date = models.DateTimeField()
    reason = models.TextField(default='General Inquiry')  # Default value for reason
    location = models.CharField(max_length=100, default='Main Branch')  # Default value for location
    phone = models.CharField(max_length=15, default='+1')  # Default value for phone
    description = models.TextField()

    def __str__(self):
        return f"Appointment for {self.user.username if self.user else 'Anonymous'} on {self.date}"



class User(models.Model):  
    name = models.CharField(max_length=100, default="N/A")
    accountBalance = models.DecimalField(max_digits=10, decimal_places=2)
    
    accountType = (
        ('savings', 'Savings Account'),
        ('checking', 'Checking Account'),
    )
    account_type = models.CharField(max_length=10, choices=accountType, default='savings')

    def __str__(self):
        return self.name



