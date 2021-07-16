const min = 25;
const km = 11.5;

function solucao(min, km) {
    let precoDistancia = 0;
    let precoTempo = 0;
    precoTempo = min >= 20 ? 30 * (min - 20) + 50 * 20 : 50 * min
    precoDistancia = km >= 10 ? 50 * (km - 10) + 70 * 10 : 70 * km
    const precoTotal = precoDistancia + precoTempo

    console.log(Math.floor(precoTotal))
}
solucao(min, km)