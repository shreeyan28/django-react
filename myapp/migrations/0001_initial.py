# Generated by Django 5.0 on 2023-12-11 22:57

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(default="N/A", max_length=100)),
                (
                    "accountBalance",
                    models.DecimalField(decimal_places=2, max_digits=10),
                ),
                (
                    "account_type",
                    models.CharField(
                        choices=[
                            ("savings", "Savings Account"),
                            ("checking", "Checking Account"),
                        ],
                        default="savings",
                        max_length=10,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Appointment",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(default="N/A", max_length=100)),
                ("date", models.DateTimeField()),
                ("reason", models.TextField(default="General Inquiry")),
                ("location", models.CharField(default="Main Branch", max_length=100)),
                ("phone", models.CharField(default="+1", max_length=15)),
                ("description", models.TextField()),
                (
                    "user",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
