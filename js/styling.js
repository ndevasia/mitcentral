const brandColors = new Map([
    ['Piazza', '#3e7aab'],
    ['Canvas', '#a41f36'],
    ['Gradescope', '#1b7771']
])

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