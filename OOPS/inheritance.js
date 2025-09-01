class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        console.log(`For more information contact at ${this.email}`);
    }
}

const userone = new Teacher("Shivam","shivam@gmail.com","Wrongpassword")

userone.addCourse()


const usertwo = new user("Shubham");

usertwo.logMe();


console.log(userone instanceof user)
// console.log(userone === usertwo)
// console.log(userone === user)
// console.log(Teacher === user)
