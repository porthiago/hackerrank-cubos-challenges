const numeros = [10, 5, 20]

const [...rest] = numeros;

console.log(...rest)

const verificarNumeros = (numero, limiteInferior, limiteSuperior) => {

    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log('PERTENCE ');
    } else {
        console.log('NAO PERTENCE');
    }
};

verificarNumeros(...rest);