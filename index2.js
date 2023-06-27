// Javascript: Básico 

// Aviso de baixa quantidade de estoque no produto
// Mostrar a msg com o nome do produto, e quantidade atual no estoque

let nome = "lapis"
let preco = 2.5
let qtd = 40
let total = preco * qtd

// if (qtd < 5) {
//     alert(`O produto ${nome} esta com estoque abaixo do normal, com apenas ${qtd} unidades`)
// } else {
//     alert("Estoque normal")
// }

// let diaDaSemana = prompt("Digite um numero referente ao dia da semana de 0 a 6")

// switch (diaDaSemana) {
//     case "0":
//         preco = 2
//         break;

//     case "1":
//         preco = 3
//         break;

//     default:
//         preco = 8
//         break;
// }

// console.log(preco);

// for (let index = 0; index < 5; index++) {
//     console.log(index);    
// }


// let contador = 0

// while (contador < 10) {
    
//     console.log(contador);
//     contador++
// }

let saida = "entrar"
let num = 0

while (saida == "entrar") {
    num = prompt("Digite um numero maior que 1")
    if (num > 1) {
        saida = "sair"
    }
}

for (let index = 0; index <= num; index++) {
   
         console.log(index);
    
 }

// for (let index = 0; index <= 100; index++) {
//    if (index % 2 == 0) {
//         console.log(index);
//    }
// }
