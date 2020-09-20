function submitPlatform(){
	const userInputPlatform = document.getElementById("platNameSubmit").value;
  const userInputPlatformLink = cleanLink(document.getElementById("platLinkSubmit").value);
	const newHtml = newPlatformHTML(userInputPlatform, userInputPlatformLink);
	// create a new div element 
    const newDiv = document.createElement("div"); 
    newDiv.classList.add("box");
    newDiv.classList.add("platform");
    newDiv.innerHTML = newHtml;

    // add the newly created element and its content into the DOM 
    const parentDiv = document.getElementById("platforms"); 
    const refDiv = document.getElementById("add-button");
    parentDiv.insertBefore(newDiv, refDiv);
    unhide();
}

function submitClass(){
	const userInputClass = document.getElementById("classNameSubmit").value;
  const userInputClassLink = cleanLink(document.getElementById("classLinkSubmit").value);
  const userInputClassType = document.getElementById("classTypeSubmit").value;
	const newHtml = newClassHTML(userInputClass, userInputClassLink, userInputClassType);
	// create a new div element 
    const newDiv = document.createElement("div"); 
    newDiv.classList.add("box");
    newDiv.classList.add("class");
    newDiv.innerHTML = newHtml;

    // add the newly created element and its content into the DOM 
    const parentDiv = document.getElementById("classes"); 
    const refDiv = document.getElementById("add-button");
    parentDiv.insertBefore(newDiv, refDiv);
}

/* Add https:// and/or www to a link, as appropriate, to ensure that it reads as absolute */
function cleanLink(link) {
  if (link.startsWith('https://')) {
      return link;
  } else {
    // MIT links don't work with www at the start
    if (link.endsWith('mit.edu')) {
      return 'https://' + link;
    } else {
      if (link.startsWith('www')) {
        return 'https://' + link;
      } else {
        return 'https://www.' + link;
      }
    }
  }
}

function newPlatformHTML(platform, link){
	const newHtml = "<a href='"+link+"' target='_blank' class='platform-button'>\n"+platform+"</a>";
	return newHtml;
}

function newClassHTML(className, link, type){
	const newHtml = "<p class='title'>"+className+"</p>\n<div class='links'>\n<div class='link'>\n<a href='"+link+"' target='_blank'>"+type+"</a>\n</div>\n</div>";
	return newHtml;
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

function redirect(){
  document.location.href="your-classes.html"
}
