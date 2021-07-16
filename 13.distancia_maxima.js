const input = "2\n0 0\n1 1";
function processData(input) {
    const linhas = input.trim().split("\n")
    const n = parseFloat(linhas[0], 10)
    const coordenadas = []
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ")
        coordenadas.push({
            x: parseFloat(coord[0], 10),
            y: parseFloat(coord[1], 10)
        })
    }
    let m = 0;
    for (let item of coordenadas) {
        for (let currentValue of coordenadas) {
            const Dist = Math.sqrt((Math.pow(item.x - currentValue.x, 2) + Math.pow(currentValue.y - item.y, 2)), 2)
            m = Dist > m ? Dist : m;
        }
    }
    console.log(m)

}
processData(input)
