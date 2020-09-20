function loadClasses() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("In");
            var db = firebase.firestore();
            var docRef = db.collection("users").doc(user.email);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    doc.data().classes.forEach((userClass) => {
                        const newClass = createClass(userClass);
                        const classes = document.getElementById("classes"); 
                        const addButton = document.getElementById("add-button");
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

        const linkInfo = document.createElement('a');
        linkInfo.href = classLink.link;
        linkInfo.target = '_blank';
        const linkText = document.createTextNode(classLink.name); 
    
        linkInfo.appendChild(linkText);  
        linkClass.appendChild(linkInfo);
        links.appendChild(linkClass);
    });
    newClass.appendChild(links);

    return newClass;
}