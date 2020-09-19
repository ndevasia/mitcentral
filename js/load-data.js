function loadClasses() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("In")
        } else {
          console.log("out");
        }
      });
      
    /*console.log("loading");
    const user = firebase.auth().currentUser;
    if (user === null) {
        // user is not logged in, no classes
        console.log("not logged in");
        return;
    }
    console.log(user);
    const userInfo = db.collection("users").doc(user);
    userInfo.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });*/
}