# Generated by Django 5.1.1 on 2024-09-25 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cuentas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='fecha_nacimiento',
            field=models.DateField(blank=True, null=True),
        ),
    ]
