const min = 2
const max = 10
const valores = [0, 5, 6, 10, 11]
function solucao(min, max, valores) {
    const permitido = []
    let n = 0;
    for (i = 0; i < valores.length; i++) {
        if (valores[i] >= min && valores[i] <= max) {
            permitido[n] = valores[i];
            n++;
        }
    }
    console.log(permitido)

}