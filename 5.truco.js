const carta = "2"
function solucao(carta) {
    const rodada = {
        'Q': 'J',
        'J': 'K',
        'K': 'A',
        'A': '2',
        '2': '3',
        '3': 'Q',

    }
    console.log(rodada[carta])
}
solucao(carta)