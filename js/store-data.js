possibleLinks = [['#lecture-link-textbox', 'Lecture'], 
		['#recitation-link-textbox', 'Recitation'], 
		['#lab-link-textbox', 'Lab'],
		['#class-website-textbox', 'Website'],
		['#OH-link-textbox', 'Office Hours']]

function addClass() {
	firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

        	const db = firebase.firestore();
			userEmail = db.collection("users").doc(user.email);
			className = document.querySelector('#class-name-textbox').value;
			classColor = document.querySelector('#class-color').value;
			actualLinks = []
			possibleLinks.forEach((possibleLink) => {
				const source = document.querySelector(possibleLink[0]);
				if (source !== null) {
					const linkInfo = source.value;
					if (linkInfo !== '') {
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
			});
                    
        	return false;
        }
        else {
        	console.log("logged out");
        }
	});
}

function addPlatform() { 
	console.log("top");
	firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

        	const db = firebase.firestore();
			userEmail = db.collection("users").doc(user.email);

			platformName = document.querySelector('#plat-name-submit').value;
			platformColor = document.querySelector('#platform-color').value;
			platformLink = document.querySelector('#plat-link-submit').value;
			
        	userEmail.update({
			    platforms: firebase.firestore.FieldValue.arrayUnion(
				    {
				    	name: platformName,
				    	color: platformColor,
				    	link: platformLink,
				    }
			    )
			});
            console.log("bottom");
        	return false;
        }
        else {
        	console.log("logged out");
        }
	});
}


function unhide() {
  const x = document.getElementById("hiddenPlatformFields");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
  	const children = x.children;
  	for (var i = 0; i < children.length; i++){
  		children[i].value = '';
  	}
  }
}