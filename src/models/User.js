class User{
    constructor(name, email, uid){
        this.name = name;
        this.email = email;
        this.uid = uid;
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getUid(){
        return this.uid;
    }
}

export default User;