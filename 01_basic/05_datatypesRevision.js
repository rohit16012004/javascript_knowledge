//Primitive Datatypes
//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

//How to declare symbol? 
//It is Used to define uniqueness
const id = Symbol('123')
const AnotherId = Symbol('123')

console.log(id === AnotherId)

const BigNumber = 256526526555566652525n


// Reference Datatypes(Non-Premetive)
//3 Types : Arrays, Objects, Functions

const heroes = ["Shaktiman","JuniorG","Sonpari"];

let myobj = {
    name:"Ashis",
    age: 21
}

const myFunction = function(){
    console.log("Hello Gayeees!")
}

/*

Typeof All premitive datatype
-----------------------------
string    : string
int       : int
bigNumber : Undefined
Null      : Object
Boolean   : Boolean


Typeof all Non - premetive
--------------------------
Array     : Function
Objects   : Function
Functions : Function Object


*/
