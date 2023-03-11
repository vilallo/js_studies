//Function as other function parameters(CALLBACK)
function fn(cb){
    console.log("executar callback")
    console.log("typeof cb")
    cb()
}

//função anonima
fn(function(){
    console.log("funcao passado por parametro")
})
//with callback
function callback(){
    console.log("casllback")
}
fn(callback)
//Other way of doing it

const obj = {
    callback
    //callback: callback
}
obj.callback()

//returning a function as the result of other func
function fnRet(n1){
    return function(n2){
        return n1 * n2
    }
}
const funcaoRet = fnRet(10)
//funcaoRet will have the returned function
const mult = funcaoRet(5)
//Envolve closure
console.log(mult)