from django.db import models

class Todo(models.Model):
    text =  models.TextField()

    def __str__(self):
        return self.number
