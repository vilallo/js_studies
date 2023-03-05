//Create Variables
//Var, Let, Const
//Var - Cross Platform -> ES5 

// Let e Const -> ES2015 - Almost every browser support natively

let teste = "Minha String";
//We can do teste = 10 -> Pela tipagem fraca
console.log(teste);

//Const não pode ser alterada
const k = 10;
console.log(k);
// We can declare a variable without giving a value
//let teste;

/*Primitive Data Types */
//(string, Bool, Number(Int/Float))
varint = 10;
varfloat = 2.5;
varstring = "Vinicius";
varBool = true
//Concatenation
let age = 40;
let msg = "Eu possuo " + age + " anos";
console.log(msg);
//Ex2 Tempalte Literals-> 
let msg2 = `Eu possuo ${idade} anos`;
console.log(msg2);

//########################
//How can I see the datatypes of the variables{TYPEOF}
console.log(typeof msg, typeof age);
//Create a Bool Datatype;
const isValid = true;
//Undefined ,NUll e symbol(ES2015)
//Undefined -> Created but has no value
let vini;
console.log(vini)//typeof and valuewill be Undefined too
//NULL -> Value with no value
vini = Null; // Now the datatype is null
// How can I convert datatypes
let n1 = 10.23892478927;
let n2 = "2";
console.log(n1*n2);//Will convert automatically to number(conversão implicita)
// If I sum it will concatenate (n1 + n2) = 102
//parseFloat, parseInt, Number() -> last one is a constructor
n2 = parseInt(n2); // -> Will convert to integer(Tira os decimais)
//parseFloat(n2)-> Would convert to  float
//##########################
// -> convert to string
//n2 + "" -> concatenate with nothing and generates a string
n2 = n2.toString();
//n2 = n2.toString(2)-> base binária



