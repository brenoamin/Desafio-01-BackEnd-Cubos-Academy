const lista = [1, 2, 3, 4]

function solucao(lista) {
    const soma = lista.reduce((accumulator, currentValue) => {
        accumulator = accumulator + currentValue;
        return accumulator
    })
    console.log(soma)

}
solucao(lista)