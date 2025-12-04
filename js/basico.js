console.log("Olá, mundo.")
/*Para Declarar Variavél
let nome = "Luis" - Variavél que pode mudar o valor.
const nome = "Luis" - Variavél que não pode mudar o valor*/
const nome = "Brendinha"
const idade = "20"
const cidade = "Limeira"
//Forma antiga para concatenar informações//

/*console.log(nome + " tem " + idade + " anos e mora em " + cidade + ".")*/

/*Concatenar usando template string*/
console.log(`${nome} tem ${idade} anos e mora em ${cidade}.`)

//Jvscript usa CamelCase
//PascalCase - MinhaVariavel - usado em C#, Java para nome de classes e métodos.
//camelcase - minhaVariavel. - usado em java script e outras linguagens. geralmente em variavéis.
//kebab-case - minha-variavel - usado em HTML e CSS.
//snake_case - minha_variavel. - usado em Python.

//array
const listaDeFrutas = ["Laranja", "Uva", "Limão", "Pera", "Maça", "Goiaba"]
console.log(listaDeFrutas[3]) /*=> aqui você pega só um dos valores da array.*/

//Aqui você percorre uma array inteira.
listaDeFrutas.forEach(fruta => {
    console.log(fruta)
})

/* "[" = define uma array "{" = define um objeto*/

//Objeto em Java Script
const Pessoa = {
    nome: "Brenda",
    idade: "21",
    cidade: "São Paulo",
    salario: 200000000,
    habilidades: ["HTML", "CSS", "JS", "c#"],
    endereco: {
        rua: "Rua Exemplo",
        numero: 123,
        bairro: "Centro",
        cep: "99999-99"
    }
}

console.log(Pessoa.nome)
console.log(Pessoa.endereco.rua)
console.log(Pessoa.habilidades[2])

//Funções em Javascript

//Como somar
function somar(numero1,numero2) {
    // const numero1 = 50
    // const numero2 = 60
    const resultado = numero1 + numero2
    return resultado
}

console.log("O resultado da soma é: " + somar(32,69))

// Outra forma de fazer isso
const multiplicar = function (n1,n2) {
    return n1 * n2
}
console.log("O resultado da múltiplicação é: " + multiplicar(32,69))
