import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

class Firebase{
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = firebase.firestore();
    }

    doCreateUserWithEmailAndPassword(email, password){
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    doSignOut(){
        return this.auth.signOut();
    }

    doPasswordReset(email){
        return this.auth.sendPasswordResetEmail(email);
    }
 
    doPasswordUpdate(password){
        return this.auth.currentUser.updatePassword(password);
    }

    addUser(name, email, uid){
        this.db.collection("users").add({
            fullname: name,
            email: email,
            uid: uid
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}

export default Firebase;