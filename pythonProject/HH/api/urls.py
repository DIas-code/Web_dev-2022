
from django.urls import path
from .views import companies_detail, companies_list, company_vacancies, vacancies_top, vacancy_list, vacancy_detail

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:comp_id>/', companies_detail),
    path('companies/<int:comp_id>/vacancies', company_vacancies),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', vacancies_top)
]