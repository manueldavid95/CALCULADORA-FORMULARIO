// formularios
const form = document.getElementById('formulario')
//efecto para el form
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const numeroUno = parseFloat(document.getElementById('numeroUno').value)
    const numeroDos = parseFloat(document.getElementById('numeroDos').value)
    let resultado = document.getElementById('resultado')

    //validacion para caracteres
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        return resultado.value = 'no acepto cadenas de texto'
    }

    //numeros negativos
    if (numeroUno < 0 || numeroDos < 0) {
        resultado.value = 'NO ACEPTO NUMEROS NEGATIVOS AMOR'
        return
    }


    let operacion = e.submitter.value;
    let operacionResultado = 0
    switch (operacion) {
        case 'suma':
            operacionResultado = numeroUno + numeroDos
            break;
        case 'resta':
            operacionResultado = numeroUno - numeroDos
            break;
        case 'multiplicacion':
            operacionResultado = numeroUno * numeroDos
            break;
        case 'division':
            if (numeroDos === 0) {
                operacionResultado = 'no puedes dividir entre 0'
            } else {
                operacionResultado = numeroUno / numeroDos
            }
            break;
    }
    resultado.value = operacionResultado
})

form.addEventListener("reset", () => {
    document.getElementById('resultado').value = '';
})