// Percorrer o array
//identificar a jogada e comparar com a jogada dos outros - 
//(pode ser uma variavel que guarda a primeira jogada e compare com as outras, caso tenha mais uma igual, ninguém ganhou)


const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }

]

const jogadaMestra = jogadores[0].jogada;

let contador = 0;


for (let i = 1; i < jogadores.length; i++) {

    if (jogadaMestra !== jogadores[i].jogada) {
        jogadaMestra = jogadores[i].jogada
        contador++
    }
}
