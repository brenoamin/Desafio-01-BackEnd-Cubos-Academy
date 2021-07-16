const numeros = [2, 2, 2, 2]

function solucao(numeros) {
    const soma = numeros.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
    console.log(soma % numeros.length != 0 ? soma % numeros.length : numeros.length)
}
solucao(numeros)