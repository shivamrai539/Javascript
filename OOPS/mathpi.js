const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);

const data = {
    name : "Shivam Rai",
    u_roll : 2315002073,
    college : "GLA",

    payment : function(){
        console.log("payment done");
    }
}

console.log(Object.getOwnPropertyDescriptor(data,"name"));

Object.defineProperty(data, 'u_roll', {
    //writable: false,
    enumerable: false,
    //configurable: false
})

console.log(Object.getOwnPropertyDescriptor(data,'u_roll'))

// now u_roll is immutable.
u_roll = 9283740283
console.log(data.u_roll);

// for iteratio of object we don't use directly data but use Object.entries(data).
// now when i iterate data object then i cannot iterate on "u_roll" bcz enumerable is false seted previously.
for(let [key,value] of Object.entries(data)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
} 