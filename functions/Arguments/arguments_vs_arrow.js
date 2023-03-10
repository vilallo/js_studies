//Arrow funcitons will not receive arguments
const somar = () => {
    console.log(arguments)
    let total = 0
    for (let i = 0; i < arguments.lenght; i++){
        total += arguments[i]
    } 
    return total
}
console.log(somar())
//Will give errors because we can't use arguments in arrow functions
//We have in every function a property called name 
const sum = function(){
    console.log("hello world")
}
console.log(somar.name)
//The function don't have a name, but it receives the name of the const Somar
// If we put a name like s somar.name will be s