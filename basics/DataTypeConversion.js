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

