function Agregar(){

    var pares = document.querySelectorAll('.parCampos');

    if (pares.length >= 5){
        alert('No puedes agregar mas de 5 campos');
        return;
    }

    var nuevoPar = pares[0].cloneNode(true);

    nuevoPar.querySelector('.nota').value = '';
    nuevoPar.querySelector('.porcentaje').value = '';

    document.querySelector('.contenedorCampos').appendChild(nuevoPar);

}

function Eliminar(){

    var paresCampos = document.querySelectorAll('.parCampos');

    if (paresCampos.length > 1){
        var pares = event.target.closest('.parCampos');
        pares.remove();
    }else{
        alert('No puedes eliminar todos los campos.')
    }

}