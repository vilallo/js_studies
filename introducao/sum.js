function sum(n1,n2){
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        throw Error("Sum only accept numbers")
    }
    return n1 + n2
}
let soma = ""
    try{
        let soma = sum(3,"a")
    } catch(e){
        console.log("Ocorreu um erro")
        console.log(e.message)
    }
    console.log(soma)
    //Tudo debaixo do erro no JS, entao é muito importante utilizar o try catch