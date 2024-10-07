# Generated by Django 5.1.1 on 2024-10-01 16:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('automoviles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Servicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(max_length=50)),
                ('fecha_inicio_mantenimiento', models.DateField()),
                ('fecha_fin_Mantenimiento', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Mantenimiento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_taller', models.CharField(max_length=50)),
                ('descripcion', models.TextField()),
                ('id_automovil', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='automoviles.automovil')),
                ('id_tipo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='servicio.servicio')),
            ],
        ),
        migrations.CreateModel(
            name='Taller',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_taller', models.CharField(max_length=50)),
                ('direccion', models.CharField(max_length=255)),
                ('telefono', models.CharField(max_length=15)),
                ('id_servicio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='servicio.servicio')),
            ],
        ),
        migrations.AddField(
            model_name='servicio',
            name='id_taller',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='servicio.taller'),
        ),
    ]