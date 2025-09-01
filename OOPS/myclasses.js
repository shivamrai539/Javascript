class user {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const newuser = new user("Shivam","shivam@gmia.com","hereispass2332")
console.log(newuser.encryptPassword());
console.log(newuser.changeUsername());



// behind the scene

// function user(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// user.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// user.prototype.lowername = function(){
//     return `${this.username.toLowerCase()}`
// }

// const oldUser = new user("SHUBHAM","shubham@gmial.com","Nopass234")
// console.log(oldUser.encryptPassword());
// console.log(oldUser.lowername());