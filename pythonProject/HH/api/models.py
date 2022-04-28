from django.db import models

# Create your models here.
class Company (models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(default='')
    city = models.CharField(max_length=50)
    address = models.TextField(default='')

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy (models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(default='')
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'{self.name} - {self.company}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary

        }