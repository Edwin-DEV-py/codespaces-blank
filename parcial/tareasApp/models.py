from django.db import models

class TareaModel(models.Model):

    name = models.CharField(max_length=20)
    desc = models.CharField(max_length=50)

    createdAt = models.DateTimeField(auto_now=True)
