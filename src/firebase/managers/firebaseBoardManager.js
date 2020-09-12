import "firebase/auth";

class FirebaseBoardManager{
    constructor(db){
        this.db = db;
    }

    addNewBoard(owner, callback){
        this.db.collection("boards").add({
            owner:owner.uid
        }).then(function(docRef) {
            console.log("Added new board", docRef.id);
            callback(docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    saveWidgetsToBoard(boardID, widgetsList){
        this.db.collection("boards").doc(boardID).set({
            widgets: widgetsList
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