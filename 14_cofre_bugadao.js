function processData(input) {

    const splittedInput = input.trim().split('\n');

    const senha = splittedInput[0];
    const senhaRecebida = splittedInput[1];

    let guardaSequencia = '';
    let verificador = senhaRecebida;
    let contador = 0;

    for (let i = 0; i < senha.length; i++) {

        for (let j = 0; j < verificador.length; j++) {

            if (senha[i] === verificador[j]) {
                guardaSequencia += verificador[j]
                verificador = verificador.slice(verificador.indexOf(senha[i]));

                break;
            } else {


            }
        }

    }


    senha === guardaSequencia && verificador !== senhaRecebida ? console.log('SIM') : console.log('NAO');
}


processData('cubos\nxcxuxbxoxs\n') //SIM
processData('cubos\nsuboc\n') //NAO
processData('cubos\newvelrabsocaeln\n') //NAO

