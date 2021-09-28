// Comentarios , super importante escribir comentarios
/*
Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores, 
dolore! A rerum vero recusandae velit ullam dolor ? Vel autem aliquid porro suscipit recusandae quasi beatae ullam rem eum excepturi.Provident.
*/

/*************************************** */
/*   Esto es un bloque de algo           */
/************************************** */
var miVariable = 10;
miVariable = 20;

let otraVariable = 21;
otraVariable = 121212;

const PI = 3.14159267;
//PI = 2131; // Esto no lo puedo hacer...

var miVariableString = "Hola Mundo... desde JS";

miVariable = miVariableString;

otraVariable = PI;

let miSuperVariable = Number(100);

otraVariable = miSuperVariable;

var myInput = prompt("Ingrese su edad..");
// Ojo con los comentarios en una app en produccion..
console.log(miVariableString , miSuperVariable, myInput);


let ultimaVariable = myInput - miSuperVariable;

console.log(ultimaVariable);