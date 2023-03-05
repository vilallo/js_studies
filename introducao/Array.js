//To ways to create -> formal and informal
const arr = new Array()
console.log(typeof arr)
//Object type
const arr2 = new Array(true, "Daniel", 28, new Array(2,4,10))
console.log(arr2)
arr[0] = "Vini"
arr[1] = "Gui"
arr[2] = "Maria"
arr[3] = "Tiago"
console.log(arr.length)
console.log(arr)
console.log(arr2[arr2[3].length - 1]) //28
console.log(arr2[3][arr2[3].length - 1])
//Sintaxe mais usada para arrays
arr2[4] = "New Value"
arr2[arr2.length] = 'ValueFinal'//-> Will add in the last position
arr2.push("add with push")
//adding several values
arr2.push(1,2,3,"last_vAL")
console.log(arr2)
//USING VARIABLES TO ACCESS THE ARRAY
let n= 6
console.log(arr2[n])
//How to iterate through arrays
const nomes = ["Maria","vini","Gui","Tiago"]
for (let i = 0; i < nomes.length; i++) {
    console.log(`${i}: Nome é ${nomes[i]}`)
}