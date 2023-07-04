// function exibirNome(nome = "") {
//   let frase = `Seu nome é ${nome}`
//   return frase
// }

// let nome = prompt("Digite seu nome: ")
// let texto = exibirNome(nome)
// console.log(texto);

let carrinho = {
    itens: [
        {
            nome: "Lapis",
            qtd: 2,
            preco: 120
        },
        {
            nome: "Borracha",
            qtd: 1,
            preco: 80
        },
        {
            nome: "Caneta",
            qtd: 5,
            preco: 80
        },
    ]
}

function somarQtd() {
    let totalQtd = 0

    for (let index = 0; index < carrinho.itens.length; index++) {
        totalQtd += carrinho.itens[index].qtd
    }

    return totalQtd
}

function somarPreco() {
    let totalPreco = 0

    for (let index = 0; index < carrinho.itens.length; index++) {
        totalPreco += carrinho.itens[index].qtd * carrinho.itens[index].preco
    }

    return totalPreco
}


