
//evento para escuchar los porcentajes
function configurarListeners() {
    var sumaPorcentajes = document.querySelectorAll('.porcentaje');

    sumaPorcentajes.forEach(function(input) {
        input.addEventListener('input', function() {
            var totalSuma = 0;

            sumaPorcentajes.forEach(function(input) {
                var valor = parseInt(input.value);
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

//evento de calcular

function Calcular(){
    console.log("hola")
}
