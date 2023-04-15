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
var motivacion = document.getElementById('motivacion');
var error = document.getElementById('error');
error.style.color='red';

function enviarFormulario(){
    console.log('Enviando Formulario...');
    
    var mensajesError=[];

    if(nombre.value===null || nombre.value==='' || nombre.value<2 && nombre.value>21){
        mensajesError.push('Favor ingresa un nombre válido entre 3 y 20 caracteres');
    }

    if(apellidoP.value===null || apellidoP.value==='' || apellidoP.value<2 && apellidoP.value>21){
        mensajesError.push('Favor ingresa un apellido paterno válido entre 3 y 20 caracteres');
    }

    if(apellidoM.value===null || apellidoM.value==='' || apellidoM.value<2 && apellidoM.value>21){
        mensajesError.push('Favor ingresa un apellido materno válido entre 3 y 20 caracteres');
    }

    if(rut.value===null || rut.value==='' || rut.value<8 && rut.value>11){
        mensajesError.push('Favor ingresa un rut válido');
    }
    if(telefono.value===null || telefono.value==='' || telefono.value<8 && telefono.value>13){
        mensajesError.push('Favor ingresa un teléfono válido');
    }
    if(edad.value===null || edad.value==='' || edad.value<17 && edad.value>36){
        mensajesError.push('Favor ingresa una edad entre 18 y 35 años');
    }
    if (fNacimiento.value===null || fNacimiento.value===''){
        mensajesError.push('Favor ingresa tu fecha de nacimiento');
    }
    if (genero.value===null || genero.value===''){
        mensajesError.push('Favor ingresa el género con el que te identificas');
    }
    if (correo.value===null || correo.value===''){
        mensajesError.push('Favor ingresa tu correo');
    }
    if (profesion.value===null || profesion.value===''){
        mensajesError.push('Favor ingresa tu profesión');
    }
    if (motivacion.value===null || motivacion.value===''){
        mensajesError.push('Favor ingresa tu motivación para ser parte del equipo');
    }


    error.innerHTML = mensajesError.join('<br>');

    return false;
}


