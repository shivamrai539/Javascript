// primitve

// 7 types : string , Number , Boolean , null , symbol , BigInt

const score = 100 
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol.for('123')    // if we use symbol.for the it creat same symbol all time.

console.log(id === anotherId);

console.log(typeof anotherId);



// const bigNumber = 52614645446696212n


// Reference(Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name : "shivam",
    age : 20,
}

const myfunction = function(){
    console.log("hello WOrld");
}
