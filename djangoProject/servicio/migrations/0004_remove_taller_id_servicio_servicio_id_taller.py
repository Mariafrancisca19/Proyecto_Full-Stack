# Generated by Django 5.1.1 on 2024-10-08 20:52

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('servicio', '0003_remove_servicio_id_taller'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='taller',
            name='id_servicio',
        ),
        migrations.AddField(
            model_name='servicio',
            name='id_taller',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='servicio.taller'),
        ),
    ]
