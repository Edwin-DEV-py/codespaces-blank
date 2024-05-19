
//evento para escuchar los porcentajes
function configurarListeners() {
    var sumaPorcentajes = document.querySelectorAll('.porcentaje');

    sumaPorcentajes.forEach(function(input) {
        input.addEventListener('input', function() {
            var totalSuma = 0;

            sumaPorcentajes.forEach(function(input) {
                var valor = parseInt(input.value);
                if (valor < 0) {
                    alert('La nota no puede ser menor a 0');
                    input.value = '';
                    return;
                }
                if (!isNaN(valor)) {
                    totalSuma += valor;
                }
            });

            console.log("Suma total:", totalSuma);

            if (totalSuma > 100) {
                alert('La suma de los porcentajes no puede exceder el 100%.');
                input.value = '';
            }
        });
    });
}

configurarListeners();

//La nota no puede ser mayor a 50:
function configurarListeners2() {
    var sumaPorcentajes = document.querySelectorAll('.nota');

    sumaPorcentajes.forEach(function(input) {
        input.addEventListener('input', function() {
            var valor = parseInt(input.value);

            if (valor > 50) {
                alert('La nota no puede ser mayor a 50');
                input.value = '';
            }
            if(valor < 0) {
                alert('La nota no puede ser menor a 0');
                input.value = '';
            }
        });
    });
}

configurarListeners2();

//evento de calcular

function Calcular(){
    var pares = document.querySelectorAll('.parCampos');
    var notas = 0;
    for (const par of pares) {
        if(par.querySelector('.nota').value.length === 0 || par.querySelector('.porcentaje').value.length === 0){
            alert("Debe llenar todos los campos");
            return;
        }
        var nota = parseFloat(par.querySelector('.nota').value) / 10;
        var porcentaje = parseFloat(par.querySelector('.porcentaje').value) / 100;
        var notaTotal = (nota * porcentaje).toFixed(2);
        notas += parseFloat(notaTotal);
        console.log("Nota:", nota, "Porcentaje:", porcentaje, "NotaTotal", notaTotal);
        console.log(notas);
    }

    var sumaNotas = notas.toFixed(2);
    alert('La suma de las notas es: ' + sumaNotas);
}