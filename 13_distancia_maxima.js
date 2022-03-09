function processData(input) {

    const linhas = input.trim().split('\n');
    const n = parseFloat(linhas[0]);

    const coordenadas = [];

    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(' ');
        const x = parseFloat(coord[0])
        const y = parseFloat(coord[1])
        const coordenadasEntrePessoas = {
            x,
            y
        }
        coordenadas.push(coordenadasEntrePessoas)

    }

    // console.log(coordenadas)

    for (let i = 0; i < coordenadas.length; i++) {
        console.log(coordenadas[i].x)
    }

}

const input = '3\n0 0\n0 3\n4 0\n';

processData(input)