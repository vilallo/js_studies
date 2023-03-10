/*let isValid = false

function init(){
    console.log("init menu")
}*/
(function(){
    let isValid = false
    console.log("init menu", isValid)
    function init() {
        console.log("init do menu")
    }
    init()
})()
//Assim essa função estará só numa determinada na função

//How can I use parameters
//Through the last parentesis

//We can always Use "Use strict"
(function(n1,win,doc){
    let isValid = false
    console.log("init menu", isValid, n1)
    win.alert("Hello World")
    function init() {
        console.log("init do menu")
    }
    init()
})("parameter 1", window, document)
