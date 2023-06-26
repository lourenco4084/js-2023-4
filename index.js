// var nome = "Everton"
// let idade = 25
// let altura = 1.75
// let cnh = false
// const nome = "Everton"

// let num1 = 5 
// let num2 = 7

// let soma = num1 + num2
// let sub = num1 - num2
// let mul = num1 * num2
// let div = num1 / num2

// console.log("Meu nome é", nome, "e tenho");
// console.log("Meu nome é "+nome+" e tenho");
// console.log(`Meu nome é ${nome} e tenho`);

// >
// <
// ==
// !

// 2 > 1 -> true
// 2 < 1 -> false

// num1 = 5
// 2 == 2 -> true
// 2 >= 2 -> true
// 2 <= 2 -> true
// 2 != 2 -> false
// 2 === "2" -> false
// 2 !== "2" -> true

var pratoDoDia = "Lasanha"
var precoPratoDoDia = 24.90
const frete = 13.89
var cliente = "Everton"
let cartao = "Credito"

let resultado = precoPratoDoDia + frete

let text = `O total do pedido do ${cliente} foi de: ${resultado}!`

console.log(text);

if (cartao === "Debito") {
    console.log("Compra no Debito");
}else{
    console.log("Compra no Credito");
}

