// ​1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.

// 2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 

// 3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:​

// const products = [
//   { name: 'Maça', price: 2.5 },
//   { name: 'Coca cola', price: 8 },
//   { name: 'Guarana', price: 5 },
//   { name: 'Chocolate', price: 20 }
// ];
// ​3.1) Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?

function verificadorNumero(n) {
    if (n < 0) {
        console.log("Numero negativo");
    } else if (n == 0) {
        console.log("Numero Igual a Zero");
    } else {
        console.log("Numero Positivo");
    }
}


function verificadorArray(numeros, x) {
    let verificar = numeros.includes(x);
    if (verificar == true) {
        console.log(`O numero que está procurando é o ${x}`)
    } else {
        console.log("O numero não está na lista")
    }
}

const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
]

const verificar = products.filter(products => products.price === 20).map(products => products.name)
console.log(verificar)

const verificar8 = products.filter(products => products.price < 8).map(products => products.name)
console.log(verificar8)