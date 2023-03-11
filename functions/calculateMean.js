//Mean function
//Can receive one or more numeric values
//Should return one number
//Error if the parameter is not a number
//Return zero if have no parameters
//calcularMedia() // 0
//calcularMedia(2,6) // 4
//calcularMedia(2,6,1,1,2,6) //3
//calcularMedia("2", "6")
//This code is working
function calculateMean(){
    result = 0
    lgt = arguments.length
    if (lgt === 0){
        return 0
    }
    for (let index = 0; index < lgt; index++){
        if(typeof arguments[index] != "number")
            throw new Error('All parameters must be numbers');
            //return ("Error 404")
        console.log(`argumento ${index + 1} - ${arguments[index]}`)
        result += arguments[index]
}
    //We should consider that if the length of the list is 0, the
    //result will be NaN, so we could put this condition in the top
    //or write NaN
    return result/lgt // || 0
}
console.log(calculateMean(1,5,"2"))

//Resolução calcular media
