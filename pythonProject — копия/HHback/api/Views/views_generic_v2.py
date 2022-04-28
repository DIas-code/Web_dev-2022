from rest_framework import generics

from rest_framework.permissions import IsAuthenticated
from api.serializers import CompanySerializer2, VacancySerializerModel, CompanySerializer3
from api.models import Company, Vacancy


class CompanyListAPIView(generics.ListCreateAPIView):
    # queryset = Company.objects.all()
    def get_queryset(self):
        return Company.objects.all()
    serializer_class = CompanySerializer2
    permission_classes = (IsAuthenticated,)

class CompanyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer2
    permission_classes = (IsAuthenticated,)


class CompanyDetailListAPIView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer2
    permission_classes = (IsAuthenticated,)


class VacancyListAPIView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializerModel
    permission_classes = (IsAuthenticated,)


class VacancyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializerModel
    permission_classes = (IsAuthenticated,)


class VacancyTOPlAPIView(generics.ListAPIView):
    def get_queryset(self):
        return Vacancy.objects.all().filter('-salary')
    serializer_class = VacancySerializerModel
    permission_classes = (IsAuthenticated,)