//instrucao -> Tudo que é passado para o JS
let nome = "Daniel"
console.log(10+20)
//console.log(Nome) -> Errorbc nome does not exist
//JS is Case sensitive
//Ponto e vírgula é opcional
//Exceto com duas instruções na mesma linha
//Normally CamelCase
//We can't start with numbers or specialChars, except _ and $
//Use strict -> The code will be a little bit more secure
x = 10
//We will not have an error except if we use strict mode
//"use strict" -> Must be written in the first line

function foo(){
    x = 20
    //let x
    //Write would be global
}
foo()
console.log(x)
//como eu não declarei o x, ele está no escopo global

//parameterds with the same name
    function dobrar(n1, n1){
        return n1*n1
    }
    console.log(dobrar(5, 7))
    // Will consider only the last parameter, if you input only one
    //parameter it'll give NaN

    function teste(){
        "use strict"
        //this will ne Undefined with strict
        console.log(this)
        this.a = "a"
    }
    teste()
    //this will represent the window

    let msg = "Uma string"
    msg.count = 0
    //Without strict we would be able to do that

    