const precos = [200, 150, 50, 100]

function solucao(precos) {
    precos.sort((preview, next) => preview - next)
    if (precos.length >= 3) {
        precos[0] = precos[0] / 2
        const precoTotal = precos.reduce((accumulator, currentValue) => accumulator + currentValue)
        console.log(precoTotal)
    }
    else {
        const precoTotal = precos.reduce((accumulator, currentValue) => accumulator + currentValue)
        console.log(precoTotal)
    }
}
solucao(precos)


