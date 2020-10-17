from django.db import models

class Todo(models.Model):
    number = models.IntegerField()
    text =  models.TextField(blank=True, null=True)

    def __str__(self):
        return self.number
