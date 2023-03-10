//Objetos que são muito facilmente invocados
//Can be literal/Object of 1st class/generate scope
//Auto Invoked functions
//function myFunc() or myFunc()
//Hoisting -> Capacity of hoisting  a funciton declaration
teste()
function teste() {
    console.log("teste")
}
//That will work because the functions will go to the top of the JS parsing
//Would not work with const teste = function teste(){}
//It would not be hoisted
console.log(minhaVar)
console.log(varConst)
var minhaVar = "variavel"
// will get undefined
//const varConst = "const" Will give an error with const and let
