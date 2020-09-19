function loadClasses() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("In")
        } else {
          console.log("out");
        }
      });
}