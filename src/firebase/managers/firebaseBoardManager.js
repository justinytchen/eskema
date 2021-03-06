import "firebase/auth";
import firebase from "firebase";

class FirebaseBoardManager{
    constructor(db){
        this.db = db;
    }

    addNewBoard(owner, callback) {
        var ownerID = (owner) ? owner.getUid() : null;
        this.db.collection("boards").add({
            owner: ownerID
        }).then(function (docRef) {
            console.log("Added new board", docRef.id);
            callback(docRef.id);

            
            if (owner) {
                var userRef = this.db.collection('users').doc(owner.getUid());
                userRef.update({
                    boards: firebase.firestore.FieldValue.arrayUnion(docRef.id)
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
            }
        }.bind(this))
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }

    saveBoard(boardID, widgetsList, savedDrawing){
        this.db.collection("boards").doc(boardID).set({
            widgets: widgetsList,
            savedDrawing: savedDrawing
        });
    }

    getBoardData(boardID, callback){
        var docRef = this.db.collection("boards").doc(boardID);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                callback(doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
}

export default FirebaseBoardManager;