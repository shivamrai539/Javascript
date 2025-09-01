class user{
    constructor(Id,password){
        this.Id = Id,
        this.password = password
    }
    
    get Id(){
        return this._Id.toLowerCase()
    }
    set Id(value){
        this._Id = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }

}

const userone = new user("shivam@gmail.com","NoMoreHiding")
console.log(userone.password)