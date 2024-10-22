# Generated by Django 5.1.1 on 2024-10-22 16:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Cuentas', '0001_initial'),
        ('servicio', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Calificacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('calificacion', models.IntegerField()),
                ('comentario', models.TextField(blank=True)),
                ('id_taller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='servicio.taller')),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cuentas.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='Recibo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tarea_completada', models.BooleanField(default=False)),
                ('fecha', models.DateField()),
                ('monto', models.DecimalField(decimal_places=2, max_digits=10)),
                ('id_mantenimiento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='servicio.mantenimiento')),
                ('id_servicio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='servicio.servicio')),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cuentas.usuario')),
            ],
        ),
    ]
