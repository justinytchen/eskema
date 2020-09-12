import "firebase/auth";

class FirebaseUserManager{
    constructor(db){
        this.db = db;
    }

    addUser(user){
        this.db.collection("users").doc(user.uid).set({
            fullname: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}

export default FirebaseUserManager;