possibleLinks = [['#lecture-link-textbox', 'Lecture'], 
		['#recitation-link-textbox', 'Recitation'], 
		['#lab-link-textbox', 'Lab'],
		['#class-website-textbox', 'Website'],
		['#OH-link-textbox', 'Office Hours']]

function addClass() {
	console.log("hello");
	firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

        	const db = firebase.firestore();
			userEmail = db.collection("users").doc(user.email);
			className = document.querySelector('#class-name-textbox').value;
			classColor = document.querySelector('#class-color').value;
			actualLinks = []
			possibleLinks.forEach((possibleLink) => {
				const source = document.querySelector(possibleLink[0]);
				console.log('source :' + source);
				if (source !== null) {
					const linkInfo = source.value;
					console.log(linkInfo);
					if (linkInfo !== '') {
						console.log(possibleLink[1]);
						actualLinks.push({'name': possibleLink[1],
							'link': source.value});
					}
				}
			});
			
        	userEmail.update({
			    classes: firebase.firestore.FieldValue.arrayUnion(
				    {
				    	name: className,
				    	color: classColor,
				    	links: actualLinks,
				    }
			    )
			}).then(console.log("end")).then(document.location.href="your-classes.html");
                    
        	return false;
        }
        else {
        	console.log("logged out");
        }
	})
}
