function processData(input) {

    const splittedInput = input.trim().split('\n');

    const senha = splittedInput[0];
    const senhaDigitada = splittedInput[1];

    // console.log(splittedInput);
    // console.log(senhaCorreta)
    // console.log(senhaDigitada)

    let guardaSequencia = 0;

    let contador = 0;

    //a merda ta aqui
    // for (let letraDaSenha of senha) {

    //     for (let letraDigitada of senhaDigitada) {

    //         if (letraDaSenha === letraDigitada) {
    //             contador++
    //         }
    //     }


    for (let letra of senha) {
        if (senhaDigitada.includes(letra)) {

            if (guardaSequencia < senha.length) {
                guardaSequencia++
                continue;
            }
        }
    }

    //}

    // if (contador >= senha.length) {
    //     console.log('SIM');
    // } else {
    //     console.log('NAO');
    // }

    //guardaSequencia = guardaSequencia.join('');

    if (senha.length === guardaSequencia) {
        console.log('SIM');
    } else {
        console.log('NAO');
    }

    console.log(guardaSequencia)

}


processData('Cubos\nsobuC\n')