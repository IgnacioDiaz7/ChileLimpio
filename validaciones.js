var nombre = document.getElementById('nombre');
var apellidoP = document.getElementById('apellidoP');
var apellidoM = document.getElementById('apellidoM');
var rut = document.getElementById('rut');
var telefono = document.getElementById('telefono');
var fNacimiento = document.getElementById('fNacimiento');
var edad = document.getElementById('edad');
var genero = document.getElementById('genero');
var correo = document.getElementById('correo');
var profesion = document.getElementById('profesion');
error.style.color='red';

function enviarFormulario(){
    console.log('Enviando Formulario...');
    
    var mensajesError=[];

    if(nombre.value===null || nombre.value==='' || nombre.value<3 && nombre.value>20){
        mensajesError.push('Favor ingresa un nombre válido entre 3 y 20 caracteres');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
}

