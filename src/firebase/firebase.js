import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
import FirebaseAuthHandler from "./firebaseAuthHandler";

class Firebase{
    constructor() {
        app.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
        this.auth = app.auth();
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.authHandler = new FirebaseAuthHandler(this.auth);
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