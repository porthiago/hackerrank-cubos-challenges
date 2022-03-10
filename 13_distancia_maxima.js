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

    console.log(coordenadas)

    let resultado = 0;
    let maiorResultado = 0;

    for (let xy1 = 0; xy1 < coordenadas.length; xy1++) {
        
            for (let xy2 = 0; xy2 < coordenadas.length; xy2++) {
               resultado = Math.sqrt(((coordenadas[xy2].x - coordenadas[xy1].x)**2) + ((coordenadas[xy2].y - coordenadas[xy1].y)**2))
                
               if (resultado > maiorResultado) {
                   maiorResultado = resultado;
               }
            }
    }

        console.log(maiorResultado)

}

processData(input)

const input = '3\n0 0\n0 3\n4 0\n';

