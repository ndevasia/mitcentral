function firebaseSetup(){
	 // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      var firebaseConfig = {
        apiKey: "AIzaSyDqJaHM0T7Au-NQc2cFstjea_5LnaYiVJA",
        authDomain: "mit-central.firebaseapp.com",
        databaseURL: "https://mit-central.firebaseio.com",
        projectId: "mit-central",
        storageBucket: "mit-central.appspot.com",
        messagingSenderId: "415588895548",
        appId: "1:415588895548:web:ff605fe5fae301ba0c6c39",
        measurementId: "G-WBBWS6BJJR"
      };
      // Initialize Firebase
      const firebase = require("firebase");
    // Required for side-effects
      require("firebase/firestore");
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

    }

function registerAndLoginSetup(){

	  document.querySelector('#register').addEventListener('click', function(e) {
	      e.preventDefault();
	      e.stopPropagation();
	      var db = firebase.firestore();
	      var email = document.querySelector('#email').value;
	      var password = document.querySelector('#password').value
	      var credential = firebase.auth.EmailAuthProvider.credential(email, password);
	      var auth = firebase.auth();
	      var currentUser = auth.currentUser;

	      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	        // Handle Errors here.
	        var errorCode = error.code;
	        var errorMessage = error.message
	        console.log(errorMessage)
	        document.getElementById('error-message').innerHTML = errorMessage;
	      });

	      //TODO: dont add to database if error message
	      db.collection("users").doc(email).set({
	              classes: {},
	              platforms: {},
	          })
	      .catch(function(error) {
	          console.error("Error adding document: ", error);
	      });
  	 });

    document.querySelector('#sign-in').addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var email = document.querySelector('#login-email').value;
      var password = document.querySelector('#login-password').value

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById('login-error-message').innerHTML = errorMessage;
      });
        // ...
      });
    
    document.querySelector('#sign-out').addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      firebase.auth().signOut();
    });
}

