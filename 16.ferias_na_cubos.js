const input = '2 2 2 2';
function processData(input) {
    let tratInput = input.split(" ")
    for (let item in tratInput) {
        tratInput[item] = parseInt(tratInput[item], 10)
    }
    let taxis = 0;
    taxis += tratInput[3];
    taxis += tratInput[2];
    tratInput[2] > tratInput[0] ? tratInput[0] = 0 : tratInput[0] -= tratInput[2];
    taxis += Math.floor(tratInput[1] / 2)
    const sobraDupla = tratInput[1] % 2
    taxis += Math.floor(tratInput[0] / 4)
    const sobraIndividual = tratInput[0] % 4
    const pessoasRestantes = sobraDupla * 2 + sobraIndividual;

    if (pessoasRestantes != 0) {
        pessoasRestantes <= 4 ? taxis += 1 : taxis += 2;
    }
    console.log(taxis)
}
processData(input)