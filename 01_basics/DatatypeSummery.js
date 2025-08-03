
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive Data Type)  Heap (Non Primitive )
//  Stack give copy of element 
// heap give reference to the object value

let name = "Pranav"

let name2 = name

name2 = "Hero"

console.log(name)
console.log(name2)

// Value not changed as in stack copy is provided 

let userOne ={
    userEmail:"userone@google.com",
    userNumber:100
}

let userTwo =userOne
userTwo.userEmail="usertwo@google.com"

console.log(userOne.userEmail)
console.log(userTwo.userEmail)