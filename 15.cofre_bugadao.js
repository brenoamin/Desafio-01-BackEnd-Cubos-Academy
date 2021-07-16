
const input = "ccubos\ncasauggbyoewewews"
function processData(input) {
    const trataSenha = input.split("\n")
    const senha = trataSenha[0]
    const senhaErrada = trataSenha[1]
    let arraySenha = senha.split("")
    let arraysenhaErrada = senhaErrada.split("")
    let verif = true;
    m = 0;
    for (let item of arraySenha) {
        if (m !== -1 && arraysenhaErrada.includes(item)) {
            m = arraysenhaErrada.indexOf(item, m)
        }
        else {
            verif = false;
            break;
        }
    }
    if (verif) {
        console.log("SIM")
    }
    else {
        console.log("NAO")
    }
}
processData(input)

