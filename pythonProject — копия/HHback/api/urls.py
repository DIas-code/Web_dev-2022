from rest_framework_jwt.views import obtain_jwt_token
from django.urls import path
from .Views import CompanyDetailAPIView, CompanyListAPIView, VacancyDetailAPIView, VacancyListAPIView, \
    CompanyDetailListAPIView
from .Views import vacancies_top, company_vacancies
urlpatterns = [
    path('login/', obtain_jwt_token),

    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:comp_id>/vacancies', company_vacancies),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', vacancies_top)
]