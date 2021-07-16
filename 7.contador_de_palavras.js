const texto = "Um texto qualquer"
function solucao(texto) {
    let newtexto = texto.split(" ");
    const countWords = newtexto.filter((x) => x != [""])
    console.log(countWords.length)
}
solucao(texto)