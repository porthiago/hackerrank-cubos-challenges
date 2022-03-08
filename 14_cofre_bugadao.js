function processData(input) {

    const splittedInput = input.split('\n');
    const splittedInputPop = splittedInput.pop();
    const senhaCorreta = splittedInput[0];
    const senhaErrada = splittedInput[1];

    //console.log(splittedInput);
    //console.log(senhaCorreta)
    //console.log(senhaErrada)

    let guardaSequencia = [];


    for (let letra of senhaErrada) {
        if (senhaCorreta.includes(letra)) {

            if (guardaSequencia.length < senhaCorreta.length) {
                guardaSequencia.push(letra);
                continue;
            }
        }
    }

    guardaSequencia = guardaSequencia.join('');

    if (senhaCorreta === guardaSequencia) {
        console.log('SIM');
    } else {
        console.log('NAO');
    }

    //console.log(guardaSequencia)

}

const input = 'cubos\n3333888cxxddddubdddddo***ssx22obddcubosuddddcuuuboooosssxxxxc\n';

processData(input);