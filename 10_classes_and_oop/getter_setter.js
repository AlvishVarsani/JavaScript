class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}alvish`
    }

    set password(value){
        this._password = value
    }
}

const alvish = new User("h@alvish.ai", "abc")
console.log(alvish.email);