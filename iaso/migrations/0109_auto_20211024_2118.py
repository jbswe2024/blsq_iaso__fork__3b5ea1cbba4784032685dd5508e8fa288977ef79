# Generated by Django 3.1.12 on 2021-10-24 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("iaso", "0108_add_page_feature_flag_20211005_1346"),
    ]

    operations = [
        migrations.AlterField(
            model_name="orgunittype",
            name="category",
            field=models.CharField(
                blank=True,
                choices=[
                    ("COUNTRY", "Country"),
                    ("REGION", "Region"),
                    ("DISTRICT", "District"),
                    ("HF", "Health Facility"),
                ],
                max_length=8,
                null=True,
            ),
        ),
    ]
