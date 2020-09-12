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
        var widgetsInJSON = JSON.stringify(widgetsList);
        this.db.collection("boards").doc(boardID).set({
            widgets: widgetsList
        });
    }
}

export default FirebaseBoardManager;