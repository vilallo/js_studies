//Logic Operators
//+ - * / % **

let n1 = 3;
let n2 = 4;
console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1/n2);
console.log(n2%n1);
console.log(n1**n2);

//Atribuition Operators
// =, +=, -=, *=, /=, %=, **=
// -> Simplificate one line of code

//Increment and Decrement operators
// ++, -- -> Can be post or pre increment
let i = 0;
i++;
i=10;
console.log(i);
let msg1 = `${i++} : i++ First will print in the console and then increment`;
console.log(msg1);
console.log(i);
let msg2 = `${++i}: ++i First will sum and then print in the console`;
console.log(msg2);

//Comparation Operators
/* 
Igualdade de valor -> ==
Valor e tipo -> ===
<,>,<=,>=
!= Valor diferente
!== Valor e tipo diferente
*/
let var1 = 10;
let var2 = "10"
console.log(var1 == var2) //TRUE
console.log(var1 === var2) //FALSE
console.log(var1 != var2) //FALSE (Same value diff type)
console.log(var1 !== var2) //TRUE (Diff types)

//Logic Operators
/* 
AND = &&
OR = ||
N0T = !
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete
 */

//Precedência de operações 
//&& é executado primeiro