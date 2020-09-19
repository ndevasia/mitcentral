function submitPlatform(){
	const userInputPlatform = document.getElementById("platNameSubmit").value;
	const userInputPlatformLink = document.getElementById("platLinkSubmit").value;
	const newHtml = newPlatformHTML(userInputPlatform, userInputPlatformLink);
	// create a new div element 
    const newDiv = document.createElement("div"); 
    newDiv.classList.add("box");
    newDiv.classList.add("platform");
    newDiv.innerHTML = newHtml;

    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("platforms"); 
    currentDiv.appendChild(newDiv);
}

function newPlatformHTML(platform, link){
	const newHtml = "<a href='"+link+"' target='_blank' class='platform-button'>\n"+platform+"</a>";
	return newHtml;
}

function unhide() {
  const x = document.getElementById("hiddenPlatformFields");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}