//TODO : these load functions are awfully similar...

function loadPlatforms() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var db = firebase.firestore();
            var emailRef = db.collection("users").doc(user.email);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    doc.data().platforms.forEach((platform) => {
                        const newPlatform = createPlatform(platform);
                        const platforms = document.getElementById("platforms"); 
                        const addButton = document.getElementById("add-button");
                        platforms.insertBefore(newPlatform, addButton); 
                    });
                } else {
                    // this should not happen even if data is empty so idk
                    console.log("No such document!");
                }            
            });
        } else {
          // TODO: user is logged out - redirect to ???
        }
      });
}

function createPlatform(platform) {
    const newPlatform = document.createElement('div');
    newPlatform.classList.add('box');
    newPlatform.classList.add('platform');

    const color = chroma(platform.color);
    newPlatform.style.border = '3px solid ' + color.hex();
    newPlatform.style.backgroundColor = color.desaturate(1).brighten(2).hex();

    newPlatform.appendChild(createLink(platform.name, platform.link));
    return newPlatform;
}



function loadClasses() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("In");
            var db = firebase.firestore();
            var docRef = db.collection("users").doc(user.email);
            docRef.get().then((doc) => {
                if (doc.exists) {
                	console.log(doc.data());
                    doc.data().classes.forEach((userClass) => {
                    	
                        const newClass = createClass(userClass);
                        const classes = document.getElementById("classes"); 
                        const addButton = document.getElementById("add-button");
                        console.log(user.email);
                        console.log(classes);
                        classes.insertBefore(newClass, addButton);
                    });
                } else {
                    // this should not happen even if data is empty so idk
                    console.log("No such document!");
                }            
            });
        } else {
          console.log("out");
        }
      });
}

function createClass(userClass) {
    const newClass = document.createElement('div');
    newClass.classList.add('box');
    newClass.classList.add('class');

    const color = chroma(userClass.color);
    newClass.style.border = '3px solid ' + color.hex();
    newClass.style.backgroundColor = color.desaturate(1).brighten(2).hex();

    const classTitle = document.createElement('p');
    classTitle.classList.add('title');
    classTitle.innerText = userClass.name;
    newClass.appendChild(classTitle);

    const links = document.createElement('div');
    links.classList.add('links');
    userClass.links.forEach((classLink) => {
        console.log("making class link");
        const linkClass = document.createElement('div');
        linkClass.classList.add('class-link');
        const linkInfo = createLink(classLink.name, classLink.link);
        linkClass.appendChild(linkInfo);
        links.appendChild(linkClass);
    });
    newClass.appendChild(links);

    return newClass;
}

function createLink(text, destination) {
    const linkInfo = document.createElement('a');
    linkInfo.href = destination;
    linkInfo.target = '_blank';
    const linkText = document.createTextNode(text); 
    linkInfo.appendChild(linkText);
    return linkInfo;
}