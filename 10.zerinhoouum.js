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
        "jogada": 1
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
function solucao(jogadores) {
    const playercomUm = jogadores.filter((currentValue) => currentValue.jogada == 1)
    const playercomZero = jogadores.filter((currentValue) => currentValue.jogada == 0)

    if (playercomUm.length == 1) {
        console.log(playercomUm[0].nome)
    }
    else if (playercomZero.length == 1) {
        console.log(playercomZero[0].nome)
    }
    else {
        console.log("NINGUEM")
    }

}
solucao(jogadores)