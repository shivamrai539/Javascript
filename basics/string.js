const name = "shivam"
const repocount = 50 

// console.log(name + repocount + " Value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);  // this is called Backticks 
// where ${...} this is interpolation.

const gamename = new String("Krafton") // string can also be declare like this.

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf("r"));


 const newString = gamename.substring(0,4)
 console.log(newString);

 const newstring2 = gamename.slice(-6,3)
 console.log(newstring2);

 const newstring3 = "   shivam      "
 console.log(newstring3.trim());   // remove starting and ending spaces.


 const url = "https://google.com/google%304chrome"
 console.log(url.replace("%30","-"));
 console.log(url.includes("google"));

 console.log(url.split("/"));  // split on the basis of give command.

