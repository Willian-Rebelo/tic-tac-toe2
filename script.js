
let jogador = "X"
let tabela = ["", "", "", "", "", "", "", "", ""]

function marcar(indice) {
    tabela[indice] = jogador
    if (jogador == "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }
    render()
}

function render() {
    let tds = document.querySelectorAll("td")

    let indice = 0
    while(indice < 9) {
        tds[indice].innerHTML = tabela[indice]
        indice++
    }
}
