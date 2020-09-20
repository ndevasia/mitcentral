function addClass(){
	console.log("hello");
	firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        	email = user.email;
        	var db = firebase.firestore();
        	userEmail = db.collection("users").doc(email);
        	className = document.querySelector('#class-name-textbox').value;
        	lectureLink = document.querySelector('#lecture-link-textbox').value;
        	classWebsite = document.querySelector('#class-website-textbox').value;
        	userEmail.update({
			    classes: firebase.firestore.FieldValue.arrayUnion(
				    {
				    	name: className ,
				    	color: '#f58585', //TODO: change default color / input color
				    	links: [
				    			 {'name': 'Lecture', 'link': lectureLink},
				    			 {'name': 'Website', 'link': classWebsite}
				    			]
				    }
			    )
			});
        	userEmail.get().then((dataArray) => {
        		// dataArray.data().append("TESTING");
        		console.log(dataArray.data().classes);
        	});

   //  	   	
			// console.log(firebase.firestore.FieldValue);
        	
        }
        else {
        	consel.log("logged out");
        }
	})
}
