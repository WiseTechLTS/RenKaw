# Generated by Django 4.0.5 on 2022-06-17 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Art',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(verbose_name=' ')),
                ('title', models.CharField(max_length=25)),
                ('price', models.SmallIntegerField()),
            ],
        ),
    ]