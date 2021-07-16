const lista = [2, 3, 4]

function solucao(lista) {
    const soma = lista.reduce((accumulator, currentValue) => {
        accumulator = accumulator + currentValue;
        return accumulator
    })
    const media = soma / lista.length
    console.log(media)

}  
solucao(lista)
