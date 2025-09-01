class user {
    constructor(username){
        this.username = username;
    }

    signin(){
        console.log(`${this.username} is signedin.`)
    }

    static createId(){
        return `_22alive%`
    }
}

const shivam = new user("Shivam")
// console.log(shivam.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const usertwo = new Teacher("iphone","i@phone.com")
usertwo.signin();
// console.log(usertwo.createId());