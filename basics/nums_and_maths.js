const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());  // converted to string and now i can use string mehtods.
// console.log(balance.toFixed(2));

const otherNumber = 52.25632
// console.log(otherNumber.toPrecision(4));  // return round off value.
// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000000000
// console.log(hundreds.toLocaleString('en-IN'));  // if 'en-IN' this is not given then it return default standard not indian. 


// Number.MAX_VALUE     // explore this. 



// +++++++++++++++++++++++++++++++ Maths  +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);  

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// let make dice which return random value between 1 and 6. 

const minval = 1;
const maxval = 6;

console.log(Math.floor(Math.random() * (maxval - minval + 1)) + minval);