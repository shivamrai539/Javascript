// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shivam",
    "full name": "shivam Rai",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "shivam@microsoft.com"

// Object.freeze(JsUser)          // Object.freeze makes the object immutable, you cannot change its properties.

JsUser.email = "shivam@chatgpt.com"

// console.log(JsUser);


JsUser.greeting = function() {
    console.log("hello Js User");
}

JsUser.greetingtwo =  function(){
    console.log(`Hello Js User, ${this["full name"]}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());