# Generated by Django 3.1.14 on 2021-12-15 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polio', '0037_campaign_enable_send_weekly_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='campaign',
            name='deleted_at',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
    ]
