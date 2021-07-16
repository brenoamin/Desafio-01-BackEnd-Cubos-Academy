const input = "lock"
function processData(input) {
    let arrayPalavra = input.split("")
    let firstLetter = false;
    let n = 0;
    let k = 0;
    if (arrayPalavra[0] == arrayPalavra[0].toLowerCase()) {
        firstLetter = true;
    }
    for (i = 1; i < arrayPalavra.length; i++) {
        if (arrayPalavra[i] == arrayPalavra[i].toUpperCase()) {
            n++;
        }
    }
    for (i = 0; i < arrayPalavra.length; i++) {
        if (arrayPalavra[i] == arrayPalavra[i].toUpperCase()) {
            k++;
        }
    }
    for (i = 0; i < arrayPalavra.length; i++) {
        if (n === arrayPalavra.length - 1 && firstLetter) {
            arrayPalavra[i] = arrayPalavra[i].toLowerCase()
            arrayPalavra[0] = arrayPalavra[0].toUpperCase()
        }
        else if (k === arrayPalavra.length) {
            arrayPalavra[i] = arrayPalavra[i].toLowerCase()
        }
        else {
            arrayPalavra[i] = arrayPalavra[i]
        }

    }
    arrayPalavra = arrayPalavra.join("")
    console.log(arrayPalavra)
}
processData(input)