function processData(input) {

    const splittedInput = input.trim().split('\n');

    const senha = splittedInput[0];
    const senhaDigitada = splittedInput[1];

    // console.log(splittedInput);
    // console.log(senhaCorreta)
    // console.log(senhaDigitada)

    let guardaSequencia = [];

    //a merda ta aqui
    // for (let letraDaSenha of senha) {

    //     for (let letraDigitada of senhaDigitada) {

    //         if (letraDaSenha === letraDigitada) {
    //             contador++
    //         }
    //     }


    for (let letra of senha) {
        // if (senhaDigitada.includes(letra)) {

        if (guardaSequencia.length < senha.length) {
            guardaSequencia.push(senhaDigitada.indexOf(letra))
            continue;
        }
        //}
    }

    //}

    // if (contador >= senha.length) {
    //     console.log('SIM');
    // } else {
    //     console.log('NAO');
    // }

    //guardaSequencia = guardaSequencia.join('');

    let guardaValue;

    for (let value of guardaSequencia) {
        if (guardaValue === value) {

        }
    }

    let contaSim = 0;

    for (let i = 0; i < guardaSequencia.length; i++) {

        if (guardaSequencia[i] < guardaSequencia[i + 1] && !guardaSequencia.includes(-1)) {
            contaSim++
        }

    }

    // console.log(contaSim)
    // console.log(senha.length)
    if (contaSim === senha.length - 1) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }

    console.log(guardaSequencia)

}


processData('xxCcubBos\nxxxxCticgujbpBqionabos\n')