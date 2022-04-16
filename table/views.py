from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.shortcuts import render
from django.views import View
from django.views.generic import ListView
from django.views.generic.edit import FormMixin
from .forms import FilterTable

from table.models import Table


class TableListView(ListView):
    model = Table
    template_name = 'table/main.html'
    context_object_name = 'model'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context['model'] = Table.objects.all().order_by('date')
        context['form'] = FilterTable(self.request.GET)
        paginator = Paginator(context['model'], 5)
        page = self.request.GET.get('page')
        try:
            context['model'] = paginator.page(page)
        except PageNotAnInteger:
            context['model'] = paginator.page(1)
        except EmptyPage:
            context['model'] = paginator.page(paginator.num_pages)
        return context