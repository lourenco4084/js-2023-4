// function exibirNome(nome = "") {
//   let frase = `Seu nome é ${nome}`
//   return frase
// }

// let nome = prompt("Digite seu nome: ")
// let texto = exibirNome(nome)
// console.log(texto);



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
    carrinho.total = totalPreco
    return totalPreco
}

function addItem(nome = "", qtd = 0, preco = 0) {
    carrinho.itens.push({ nome, qtd, preco })
}

// let numeros = []

// numeros.push(4)
// numeros.push(8)

// console.log(numeros);

// numeros.pop()

// console.log(numeros);

// numeros.unshift(20)

// console.log(numeros);

// numeros.shift()

// console.log(numeros);
let carrinho = {
    itens: [
        {
            nome: "borracha",
            qtd: 5,
            preco: 20
        },
        {
            nome: "Lapis",
            qtd: 1,
            preco: 110
        },
        {
            nome: "Caneta",
            qtd: 5,
            preco: 70
        },
    ],
    total: 0
}

let precoTotal = 0

carrinho.itens.map(produto => {
    precoTotal += produto.qtd * produto.preco
})

let filtro = carrinho.itens.filter(produto => produto.nome == "Lapis")

let find = carrinho.itens.find(produto => produto.preco < 100 && produto.qtd == 5)

console.log(find);