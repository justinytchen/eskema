import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
import FirebaseAuthManager from "./managers/firebaseAuthManager";
import FirebaseUserManager from "./managers/firebaseUserManager";
import FirebaseBoardManager from "./managers/firebaseBoardManager";

class Firebase{
    constructor() {
        app.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
        this.auth = app.auth();
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.authMgr = new FirebaseAuthManager(this.auth);
        this.userMgr = new FirebaseUserManager(this.db);
        this.boardMgr = new FirebaseBoardManager(this.db);
    }
}

export default Firebase;