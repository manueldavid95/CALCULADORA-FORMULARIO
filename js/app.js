// formularios
const form = document.getElementById('formulario')

// efecto para el form
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const rawUno = document.getElementById('numeroUno').value
    const rawDos = document.getElementById('numeroDos').value

    const numeroUno = parseFloat(rawUno)
    const numeroDos = parseFloat(rawDos)
    let resultado = document.getElementById('resultado')

    // validacion para caracteres
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        return resultado.value = 'no acepto cadenas de texto'
    }

    // numeros negativos
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

    if (typeof operacionResultado === 'number') {
        // Verifica si alguno de los datos ingresados o el resultado tiene decimales
        const tieneDecimalesInput = !Number.isInteger(numeroUno) || !Number.isInteger(numeroDos);

        if (tieneDecimalesInput) {
            // Determina cuántos decimales se ingresaron para conservar el formato
            const decUno = rawUno.includes('.') ? rawUno.split('.')[1].length : 0;
            const decDos = rawDos.includes('.') ? rawDos.split('.')[1].length : 0;
            const maxDecimales = Math.max(decUno, decDos);

            resultado.value = operacionResultado.toFixed(maxDecimales);
        } else {
            // Si todo son números enteros, se muestra normal sin ceros extra
            resultado.value = operacionResultado;
        }
    } else {
        resultado.value = operacionResultado;
    }
})

form.addEventListener("reset", () => {
    document.getElementById('resultado').value = '';
})