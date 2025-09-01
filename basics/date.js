

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);
// console.log(mydate.getDate());
// console.log(mydate.toJSON());
// console.log(mydate.getUTCDay());
// // console.log(mydate.getVarDate);   // dont know what is this!!!

// console.log(mydate.toLocaleDateString());

let myCreatedDate1 = new Date(2025, 7, 2)     // year-month-date
let myCreatedDate2 = new Date(2025, 7, 2, 5, 4)
let myCreatedDate3 = new Date("2025-08-02")  // year-month-date
let myCreatedDate4 = new Date("08-02-2025")  // this work as month-date-year.

// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toISOString());
// console.log(myCreatedDate4.toString());


// this is imp
let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(myCreatedDate1.getTime());


// console.log(Math.floor(Date.now()/1000)); // converting milliseconds into seconds. 

let livedate = new Date()
// console.log(livedate);
// console.log(livedate.getMonth()+1);
// console.log(livedate.getDay());    // day:- sunday = 0, mon = 1, tue = 2....

console.log(livedate.toLocaleString("default", {}));    