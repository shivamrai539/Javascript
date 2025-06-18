const myarray = [ 0, 1, 2, 3, 4]
// console.log(myarray[3]);


// Arrays methods 

// myarray.push(5);
// myarray.push(6);
// console.log(myarray.lastIndexOf(5));
// console.log(myarray.pop());

// myarray.unshift(-1);
// console.log(myarray);
// myarray.shift();
// console.log(myarray);

// const newarr = myarray.join();
// console.log(newarr);
// console.log(typeof newarr);

// slice and splice         Q what is the difference? find out. 

console.log("A ", myarray);

const myn1 = myarray.slice(1, 3)

console.log("slice", myn1);
console.log("B ", myarray);


const myn2 = myarray.splice(1, 3)
console.log("splice", myn2);
console.log("C ", myarray);


