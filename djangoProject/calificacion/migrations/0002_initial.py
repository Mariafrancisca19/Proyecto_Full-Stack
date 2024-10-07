# Generated by Django 5.1.1 on 2024-10-01 16:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Cuentas', '0002_usuario_fecha_nacimiento'),
        ('calificacion', '0001_initial'),
        ('servicio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='calificacion',
            name='id_taller',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='servicio.taller'),
        ),
        migrations.AddField(
            model_name='calificacion',
            name='id_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cuentas.usuario'),
        ),
        migrations.AddField(
            model_name='recibo',
            name='id_mantenimiento',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='servicio.mantenimiento'),
        ),
        migrations.AddField(
            model_name='recibo',
            name='id_servicio',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='servicio.servicio'),
        ),
        migrations.AddField(
            model_name='recibo',
            name='id_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cuentas.usuario'),
        ),
    ]