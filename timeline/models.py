from django.db import models

# Create your models here.
# posts/models.py
from django.db import models


class Title(models.Model):
    title = models.TextField()
    year = models.TextField()

    def __str__(self):
        return self.year


class Text(models.Model):
    text = models.TextField()
    photo1 = models.ImageField(upload_to='img/')
    photo2 = models.ImageField(upload_to='img/')

    def __str__(self):
        return self.text
