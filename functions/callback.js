function teste(fn) {
    console.log("função teste")
    fn()
}
//To execute this function I should use parentesis
//Funcao anonima de callback
teste(function (){
    console.log("funcao anonima para callback")
})
function fn() {
    console.log("callback function in another way")
}
//Same result
teste(fn)
console.log("#############################")

//Using funciton expressions
const teste1 = function (cb) {
    console.log("funcao teste")
    console.log(cb)
    cb()
}
//We don't store the return of the funciton in fn, but the whole function
const fn1 = function (param) {
    console.log("funcao anonima de callback")
    console.log(param)
}
//So this code will do nothing
fn1(30)
teste1(fn1("parametro"))