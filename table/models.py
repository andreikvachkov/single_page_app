from django.db import models

class Table(models.Model):
    class Meta:
        db_table = "table_db"
        verbose_name = "Таблица"
        verbose_name_plural = "Таблицы"

    date = models.DateTimeField(
        verbose_name='Дата'
    )
    name = models.TextField(
        verbose_name='Название',
        max_length=100
    )
    count = models.IntegerField(
        verbose_name='Количество',
    )
    interval = models.FloatField(
        verbose_name='Расстояние'
    )

    def __str__(self):
        return (self.name)