function addClass(){
	console.log("hello");
	firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        	const db = firebase.firestore();
			userEmail = db.collection("users").doc(user.email);
			
			className = document.querySelector('#class-name-textbox').value;
			classColor = document.querySelector('#class-color').value;
			lectureLink = document.querySelector('#lecture-link-textbox').value;
			recitationLink = document.querySelector('#recitation-link-textbox').value;
			labLink = document.querySelector('#lab-link-textbox').value;
			classWebsiteLink = document.querySelector('#class-website-textbox').value;
			officeHoursLink = document.querySelector('#OH-link-textbox').value;
			

        	userEmail.update({
			    classes: firebase.firestore.FieldValue.arrayUnion(
				    {
				    	name: className,
				    	color: classColor,
				    	links: [
								{'name': 'Lecture', 'link': lectureLink},
								{'name': 'Recitation', 'link': recitationLink},
								{'name': 'Lab', 'link': labLink},
								{'name': 'Website', 'link': classWebsiteLink},
								{'name': 'Office Hours', 'link': officeHoursLink}
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
        	console.log("logged out");
        }
	})
}
