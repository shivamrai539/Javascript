let number  = 33

let convertedtonumber = Number(number);

console.log(convertedtonumber); // 33
console.log(typeof convertedtonumber); // number

let string = "shivam"

let cvtonumber = Number(string);

console.log(typeof cvtonumber); // in js even string converted to number but it type is not a number.
console.log(cvtonumber); // NaN


let no2 = "34dkljfs"

let cvtonumber2 = Number(no2);
console.log(typeof cvtonumber2); // this is also converted to type number but you must check that it is number or not.
console.log(cvtonumber2); // return NaN




// conversion
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0



let name = "shivam"
let cvtobool = Boolean(name);
console.log(typeof cvtobool); // type is boolean
console.log(cvtobool); // return type is true but it is not a real boolean value. 


// conversion
// 1 => true; 0 => false
// "" => false
// "shivam" => true



// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


