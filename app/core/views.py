from django.shortcuts import render, redirect
from .models import Figura
# Create your views here.

def index(request):
    return render(request, 'core/index.html')


def compra(request):
    return render(request, 'core/compra.html')


def pago(request):
    return render(request, 'core/pago.html')


def contacto(request):
    return render(request, 'core/contacto.html')


def login(request):
    return render(request, 'core/login.html')


def adminn(request):
    return render(request, 'core/adminn.html')


def figuras(request):
    # acá hay que mostrar los guardados en sqlite
    figuras = Figura.objects.all()
    return render(request, 'core/figuras.html', {"figuras": figuras})

def crearFiguras(request):
    nombre = request.POST['name']
    valor = request.POST['valor']
    altura = request.POST['altura']
    figuras = Figura.objects.create(
        nombre=nombre, valor=valor, altura=altura
    )
    return redirect('figuras')

def eliminarFigura(request, id):
    figura = Figura.objects.get(id=id)
    figura.delete()
    return redirect('figuras')


