from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import Text
from .models import Title

admin.site.register(Text)
admin.site.register(Title)

