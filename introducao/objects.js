//Why we don't create several arrays
const nomes = ["Maria","Vini","Gui"]
const ages = [20,21,19]
console.log(nomes[0], ages[0])
//é uma ligação muito fraca, já que com um erro ou
//informação errada estragariamos o codigo

//###############

//Creating Objects -> forml language
const pessoa = new Object()
// Representado por chaves {}
pessoa.nome = "Daniel"
pessoa.idade = 25
let prop = "nome"
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa[prop])
// -> pessoa["idade"] - procura o atributo idade no obj pessoa
//Informal way
const animal = {
    nome: "Nina",
    especie: "gato",
    idade: "2 anos"
}
console.log(animal)

//How can I iterate with objects
const people = {
    nome : "Maria",
    idade :"20",
    "email" : "ela@outlook.com"
}
//Iterate through the objects
//Use the FOR IN loop
for(let prop in people){
    console.log(prop) // -> Name of the attrib
    console.log(people[prop]) //attrib itself
}