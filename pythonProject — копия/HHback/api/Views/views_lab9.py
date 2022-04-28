import json
from HH_back.api.models import Company, Vacancy
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views import View
# Create your views here.
@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(company.to_json())

@csrf_exempt
def companies_detail(request, comp_id):
    try:
        company = Company.objects.get(id=comp_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data['name']
        company.description = data['description']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({})

def company_vacancies(request, comp_id):
    com_vacancies = Vacancy.objects.all().filter(company_id=comp_id)
    com_vacancies_json = [com_vacancy.to_json() for com_vacancy in com_vacancies]
    return JsonResponse(com_vacancies_json, safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        return JsonResponse(vacancy.to_json())
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)


def vacancies_top(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_jsom = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_jsom, safe=False)