//Created as a primitive type String
//Don't have methods
teste = "teste"
console.log(typeof teste) 
//Created as object
teste = new String("teste")
console.log(typeof teste) 
let b = []
let _b = []
console.log(b == _b)
//False -> What is stored in b and _b is a space in memory for
//the arrays, and the spaces of b and_b are diferent.
b = _b //Now they use the same space in memory
b[0] = 20
console.log(_b)
//###
//#######
//###
function alteraArrray(arr){
    arr.push("Adicionado")
}
let arr = ["a"]
console.log(arr)
alteraArrray(arr)
console.log(arr)
//Existe a alteração pois é um array(é passada a referência na memória)
//Se fosse um tipo primitivo não haveria alteração
function alteraPrimitivo(p){ //mensagem
    p+="adicionado"
    console.log(p)
}
a = "mensagem"
alteraPrimitivo(a)
console.log(a) 
//O que é passada é a referência na memória