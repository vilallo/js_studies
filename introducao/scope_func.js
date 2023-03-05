
let n = "global"
function mostraN() {
    //n = "Local"
    //Atribui um novo valor a n
    let n = "Local"
    console.log("Valor de n " + n)
    //Nesse caso nos criamos uma variavel n que está no ambito local
}
mostraN()
console.log("Valor de n " + n)
//Não podemos usar no escopo global uma variavel local
//No if -> se usarmos let - global var - funcao

function testIf() {
    if (true){
        var n2 = "Criada com var dentro do if"
        //Escopode funcao
        let n3 = "Criada com let dentro do if"
        //Escopo de bloco
    }
    console.log(n2)
    //This one will give an error -> console.log(n3)
}
testIf()

function fnExt(){
    let n = "n local dentro de ext"
    function fnInt(){
        let n = "n local dentro de int"
        console.log(n)
    }
    fnInt()
    console.log(n)
}
fnExt()
//n = X != let n = X