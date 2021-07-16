const lista = [18, 0, 5]
function solucao(lista) {
    const listaFiltrado = lista.filter((x) => x >= 18)
    if (listaFiltrado.length < 1) {
        console.log("CRESCA E APARECA")
    }
    else {
        const menor = listaFiltrado.reduce((accumulator, currentValue) => currentValue < accumulator ? currentValue : accumulator)
        console.log(menor)
    }
 
}
solucao(lista)