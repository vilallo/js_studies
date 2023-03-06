const produto = {
    nome : "caneta",
    qtd : 10,
    comprar: function(n){
        if(n > this.qtd){
            return "Quantidade não disponível"
        }
        this.qtd -= n
    },
    teste1: function(){
        console.log(this)
   },
   /* THIS IS AN ARROW FUNCTION */
   teste2: () => {
    console.log(this)
   }
    //Other way would be comprar(n)  {CODE}
}
produto.comprar(3)
//produto.comprar(10)
console.log(produto)
console.log("##############################")
console.log("##############################")
/* Dentro de teste 1 THIS representa o proprio objeto*/
produto.teste1()
/* Dentro de teste2, que é uma arrow function representa 
um objeto vazio {}
representa um objeto window(como o prompt e o alert) */
produto.teste2()
//######
// const pessoas = [{},{},{OBJECTS}]
const pessoas = [
    {
        nome : "Daniel", 
        idade : 20
    },
    {
        nome : "Maria",
        idade : 21
    },
    {
        nome: "Gui",
        idade: 70
    }
]
console.log(pessoas[0].nome)
//Fazer um loop para iterar na classe
for(i = 0; i<pessoas.length;i++){
    console.log(`The name of the person of position ${i} is ${pessoas[i].nome} and the age is ${pessoas[i].idade}  `)
}
