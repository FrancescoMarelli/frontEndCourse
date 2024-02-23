var formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById('error');

function validarnombre(e){
    if(nombre.value == '' || nombre.value == null){
        console.log('Por favor completa el nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el nombre</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarcorreo(e){
    if(correo.value == '' || correo.value == null){
        console.log('Por favor completa el correo');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el nombre</li>';
        e.preventDefault();
    } else if (correo.value.indexOf('@') == -1){
        console.log('El correo no es valido');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el nombre</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validaesexo(e){
    if(sexo.value == '' || sexo.value == null){
        console.log('Por favor selecciona un sexo');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor selecciona un sexo</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarterminos(e){
    if(terminos.checked == false){
        console.log('Por favor acepta los terminos y condiciones');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor acepta los terminos y condiciones</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none';

    }
}

function validarForm(e) {
    error.innerHTML = '';
    validarnombre(e);
    validarcorreo(e);
    validaesexo(e);
    validarterminos(e);
}
    
formulario.addEventListener('submit', validarForm);
