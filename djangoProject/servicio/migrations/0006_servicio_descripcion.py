# Generated by Django 5.1.1 on 2024-10-08 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('servicio', '0005_remove_servicio_fecha_fin_mantenimiento_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicio',
            name='descripcion',
            field=models.TextField(default='El mejor arreglo'),
        ),
    ]