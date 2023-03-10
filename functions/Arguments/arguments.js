function somar(n1,n2){
    return n1 + n2
}

console.log(1,2,3)
//I don't have control about how many inputs the user write
//We can use as an array
function somaFor(arr) {
    let total = 0
    for(let i = 0; i < arr.lenght; i++){
        total += arr[i]
    }
    return total
}

console.log(somar(10,15,20))
//If we don't want to pass the array we can use arguments
//Array like
function somarArg(){
    console.log(arguments)
    let total = 0
    for (let i = 0; i < arguments.lenght; i++){
        total += arguments[i]
    }
    return total
}

console.log(somarArg(10,15,20))
//Summing using arguments or using an array will be the same


