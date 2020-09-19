const brandColors = new Map([
    ['Piazza', '#3e7aab'],
    ['Canvas', '#a41f36'],
    ['Gradescope', '#1b7771']
])

/* Color platform boxes based on the brand colors of the website they link to */
function colorBoxes() {
    const platforms = document.getElementById('platforms');
    Array.from(platforms.children).forEach((child) => {
        const brand = child.firstElementChild.innerText;
        if (brandColors.has(brand)) {
            const color = chroma(brandColors.get(brand));
            child.style.border = '3px solid ' + color.hex();
            child.style.backgroundColor = color.desaturate(1).brighten(2).hex();
        }
    })
}

/* Color the active tab */
function colorTab() {
    // Get the last part of the URL (www.whatever.com/page-name.html) and remove the .html
    const pageName = document.location.pathname.split("/").pop().split(".")[0];

    Array.from(document.getElementsByClassName('tab')).forEach((tab) => {
        const tabName = tab.id.slice(0, -4); // tab IDs are in format pageName-tab
        if (pageName === tabName) {
            tab.style.backgroundColor = "white";
        }
    });
}