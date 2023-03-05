//Conditional If Else (Using operaztors example)
let idade = 17;
let paisPresentes = true;
let comprouBilhete = false;
let son = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

if(podeViajar){
    console.log("Sim, pode viajar")
} 
else if(son) {
    console.log("This is an else if")
}   
else {
    console.log("Não pode viajar")
    //If inside the else
    if(idade <= 18){
        console.log("e é menor de idade")
    }
}
console.log("Saiu do IF");

//Operador ternario -> como se fosse um if else simplificado
let msgMaiorIdade = (idade >= 18) ? /* True */"é maior de idade"
: /* False */"é menor de 18 anos";
console.log(msgMaiorIdade);

//Falsy and Truty values ->
//falsy = 0, "", NaN, undefined, NULL, False
//Others = True
if ("false") {
    console.log("True") 
}else{
    console.log("False")
} // Output is True bc "false is a string"

//Short circuit -> More elegant and efficient way to define a var
//If n = 0 n will turn to 10, else it will be n
let n = 0
n = n || 10
console.log(n)

//Só vai executar se for true
let isValid = false
isValid && console.log("é valido")
/* if(isValid) {
    console.log("é valido")
}*/

//##############################################################################
//Conditonal Switch
//Like an if Else to compare with specific values
//O break é fundamental

let diaSemana = 0
switch(diaSemana){
    case 0:
        dia = "domingo"
        break
    case 1:
        dia = "segunda"
        break
    case 2:
        dia = "terca"
        break
    case 3:
        dia = "Quarta"
        break
    case 4:
        dia = "Quinta"
        break
    case 5: 
        dia = "Sexta"
        break
    case 6:
        dia = "sabado"
        break
    default:
        dia = " -- "
}
console.log(`Hoje é ${dia}`)