//primitive datatypes
// string , number , boolean , null , undefined , symbol , BigInt

// reference (non primitive)
// Array , objects , function

// javascript is dynamically typed language

const score = 100
const scoreValue = 100.33
const isLoggedIn = true
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);// false

const BigNum = 554448558958
console.log(typeof BigNum)

// reference (non primitive)
//Array
const heros = ["shaktiman" , "batman" , "nagraj"];
console.log(heros)

//object
let myObj = {
    name : "shrinivas",
    age : 23
};
console.log(myObj);