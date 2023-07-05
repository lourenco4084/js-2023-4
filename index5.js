// let pessoas = [
//     {
//         nome: "Pedro",
//         idade: 22,
//         profissao: "Dev Junior",
//         email: "pedro@gmail.com",
//         cnh: true
//     },
// ]

// function visualizarPessoas() {
//     pessoas.map(pessoa => {
//         console.log(pessoa);
//     })
// }

// function addPessoa(nome = "", idade = 0, profissao = "", email = "", cnh = false) {
//     let pessoa = {
//         nome,
//         idade,
//         profissao,
//         email,
//         cnh
//     }

//     pessoas.push(pessoa)
//     visualizarPessoas()
// }

// // Retorna a pessoa com idade menor que 20
// function idadeMin() {
//     let pessoasIdade = pessoas.filter(pessoa => pessoa.idade < 20)

//     return pessoasIdade
// }

// function filtrarPorNome(nome) {
//     return pessoas.find(pessoa => pessoa.nome === nome);
// }
// ----------------------------------

// class Pessoa {
//     constructor(nome = "",idade = 0){
//         this.nome = nome
//         this.idade = idade
//     }

//     retornaNome(){
//         return this.nome
//     }
// }

// let pessoa = new Pessoa("Everton", 25)
// let pessoa1 = new Pessoa("Daniela", 18)

class Carrinho {
    constructor(){
        this.itens = []
        this.subtotal = 0
        this.frete = 10
        this.total = 0
    }

    atualizarSubtotal(){
        let subtotalTemp = 0
        this.itens.map(produto => {
            subtotalTemp += produto.qtd * produto.preco
        })
        this.subtotal = subtotalTemp
        this.atualizarTotal()
    }

    addItem(nome, qtd, preco){
        let produto = {
            nome,
            qtd,
            preco
        }
        this.itens.push(produto)
        this.atualizarSubtotal()
    }

    atualizarTotal(){
        let valorTotal = this.subtotal + this.frete;
        this.total = valorTotal;
    }
}

let carrinho = new Carrinho()