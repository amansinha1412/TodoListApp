from django.db import models

# Create your models here.
class todo(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	message = models.CharField(max_length=300)
	date_for = models.DateTimeField()