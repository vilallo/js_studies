//IMC = peso / altura ** 2
//More simple way
//Cannot receive non numeric datatypes
function calculateImc(height, weight, callback){
    //if(typeof height != "number" || typeof weight != "number")
    if(weight === undefined || height === undefined )
        throw new Error ("Two parameters required")
    
    let IMC = height / (weight**2)
    
    if(IMC === NaN){
    throw new Error ("")
}
    //CALLBACK FUNCTION
    if(typeof callback === "function"){
        return callback(IMC)
    }
    return IMC 
}
//We can use switch only for exact values
/** 

Muito abaixo do peso 16 a 16,9 kg/m2

Abaixo do peso 17 a 18,4 kg/m2

Peso normal 18,5 a 24,9 kg/m2

Acima do peso 25 a 29,9 kg/m2

Obesidade Grau I 30 a 34,9 kg/m2

Obesidade Grau II 35 a 40 kg/m2

Obesidade Grau III maior que 40 kg/m2
*/
function classifyImc(imc){
    if(imc <= 16.9){return "desnutrição"}
    else if(imc <= 18.4){return "abaixo do peso"}
    else if(imc <= 24.9 ){ return "peso ideal"}
    else if(imc < 29.9){ return "acima do peso ideal"}
    else if(imc < 34.9){ return "obesidade grau 1"}
    else if(imc < 39.9){ return "obesidade grau 2"}
    else{ return "obesidade grau 3"}
}

let imc1 = calculateImc(100, 1.70)
//Deve ser chamado sem ()
let imc2 = calculateImc(100, 1.70, classifyImc)
console.log(imc1)
console.log(imc2)
