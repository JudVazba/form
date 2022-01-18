

'use strict'



function borrar(){
    alert("¿Deseas borrar los datos?");
    
}

function pedido(){

    var nombre= document.getElementById('nombre').value;
var direccion = document.getElementById('direccion').value;
var cp=document.getElementById('cp').value;
var pais= document.getElementById('pais').value;
var modelo=document.getElementById('modelo').value;
var cantidad =document.getElementById('cantidad').value;
var talla = document.querySelector('input[type="radio"]:checked').value;

alert("cliente: "+nombre+"Dirección: "+ direccion +"'/n'"+
        "Comprado: "+cantidad +" "+modelo+"talla: "+talla);
}v







