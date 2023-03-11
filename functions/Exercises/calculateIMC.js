//IMC = peso / altura ** 2
//More simple way
//Cannot receive non numeric datatypes
function calculateImc(height,weight){
    //if(typeof height != "number" || typeof weight != "number")
    if(weight === undefined || height === undefined )
        throw new Error ("Two parameters required")
    let IMC = height / (weight**2)
    if(IMC === NaN){
        throw new Error ("")
    }
    return IMC 
}
//We can use switch only for exact values
function classifyImc(imc){
    if(imc <= 16.9){return "desnutrição"}
    else if(imc <= 18.4){return "abaixo do peso"}
    else if(imc <= 24.9 ){ return "peso ideal"}
    else if(imc < 29.9){ return "acima do peso ideal"}
    else if(imc < 34.9){ return "obesidade grau 1"}
    else if(imc < 39.9){ return "obesidade grau 2"}
    else{ return "obesidade grau 3"}
}

let imc = calculateImc(70, 1.70)
console.log(`${classifyImc(imc)} -> IMC = ${imc}`)