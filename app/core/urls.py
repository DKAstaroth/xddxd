from django.urls import path
from .views import index,compra,pago,contacto,login, adminn, figuras, crearFiguras, eliminarFigura

urlpatterns = [
    path('', index, name="index"),
    path('compra', compra, name="compra"),
    path('pago', pago, name="pago"),
    path('contacto', contacto, name="contacto"),
    path('login', login, name="login"),
    path('adminn', adminn, name="adminn"),
    path('figuras', figuras, name="figuras"),
    path('crearFigura/', crearFiguras, name="crearFiguras"),
    path('eliminarFigura/<id>', eliminarFigura),
    
]
