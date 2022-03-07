// cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS 
//OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. 
//a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.

// se todas estiveram maisculas = tudo minuscula
// se apenas a primeira estiver minuscula e as outras maiusculas = primeira maiscula e o resto minuscula

// aqui da certo, hackerrank não. Verificar isso e deixar o código mais compreensível tb

const palavra1 = 'lock';
const palavra2 = 'LOCK';
const palavra3 = 'cAPS';
const palavra4 = 'cAPsLoCk';


function formatarPalavra(palavra) {
    let primeiraLetra = palavra[0];
    let restoDaPalavra = palavra.slice(1);

    if (primeiraLetra.includes(primeiraLetra.toLowerCase())) {

        for (let letra of restoDaPalavra) {

            if (restoDaPalavra.includes(letra.toUpperCase())) {
                primeiraLetra = primeiraLetra.toUpperCase();
                restoDaPalavra = restoDaPalavra.toLowerCase();
                break;
            }

        }
    } else {
        primeiraLetra = palavra[0].toLowerCase();
        restoDaPalavra = palavra.slice(1).toLowerCase();
    }

    console.log(primeiraLetra + restoDaPalavra);
}

formatarPalavra(input);