// let nomes = ["Mariah", "Marcelo", "Alessandra", "Gabriel"]
// let idades = [22,25,26,18]

// let pessoa = ["Everton", 25,"Ensino Superior Complesto"]

// console.log(`Nome: ${pessoa[0]}`); 
// console.log(`Idade: ${pessoa[1]}`); 




// for (let index = 0; index < 4; index++) {
//     console.log(`Valor do index: ${index}`);
//     console.log(nomes[index]);
//     console.log(idades[index]);
//     console.log("---------------");
// }

// let numeros = []

// for (let index = 0; index < 5; index++) {
//     numeros[index] = prompt("Digite um numero")
// }

// for (let index = 0; index < numeros.length; index++) {
//     console.log(`O numero do usuario é ${numeros[index]}`);
// }

// let nomes = ["Mariah", "Marcelo", "Alessandra", "Gabriel"]

// let sobrenome = "Figueiredo"

// console.log(sobrenome.length);

// for (let index = 0; index < nomes.length; index++) {
//     console.log(`Seu nome é: ${nomes[nomes.length - 1]}`);    
// }

// ------------------------------------
// OBJETO
// ------------------------------------

// let pessoa = ["Nome", 22, "email"]

// let pessoa = {
//     "email": "everton@gmail.com",
//     "nome": "Everton",
//     "idade": 29,
//     "sobrenome": "Figueiredo"
// }

// console.log(pessoa);
// console.log(pessoa.idade);

let controle = "Entra"
let carrinho = []

while (controle == "Entra") {

    let nome = prompt("Digite o nome do produto")
    let qtd = prompt("Digite a qtd do produto")
    let valor = prompt("Digite o valor do produto")

    var produto = {
        nome,
        qtd: qtd,
        valor: valor
    }

    carrinho[carrinho.length] = produto

    let resposta = prompt("Deseja inserir outro produto?")
    console.log(resposta);
    if (resposta == "Não") {
        controle = "Sair"
    }
}

console.log(produto);