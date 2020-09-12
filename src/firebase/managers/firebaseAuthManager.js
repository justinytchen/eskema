import "firebase/auth";
import firebase from "firebase";
import User from "../../models/User";

class FirebaseAuthManager{
    constructor(auth){
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.auth = auth;
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

    doSigninWithGoogleAuth(){
        return this.auth.signInWithPopup(this.provider);
    }

    doPasswordReset(email){
        return this.auth.sendPasswordResetEmail(email);
    }
 
    doPasswordUpdate(password){
        return this.auth.currentUser.updatePassword(password);
    }

    getCurrentUser(){
        const currentUser = this.auth.currentUser;
        if(currentUser)
            return new User(currentUser.displayName, currentUser.email, currentUser.uid);
        return new User(null, null, null);
    }
}

export default FirebaseAuthManager;