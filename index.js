////////////////////////////////////////////////
//  Navbar Opeartions

// Get elements for the navbar

let desktopButton = document.getElementById('desktopButton');
let nav = document.getElementById('nav');
let cancelButton = document.getElementById('cancelButton')

// Make navbar dispalay
desktopButton.addEventListener('click', () => {
    nav.style.display = "block"
})

// Add back the navbar
cancelButton.addEventListener('click', () => {
    nav.style.display = "none"
} )

////////////////////////////////////////////////


////////////////////////////////////////////////
// Random color guessing for our superstar

function getRandom(number) {
    return Math.floor(Math.random() * number)
}
var repeatColors;
function randomColor() {
    var color = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
    var superstar = document.getElementById("superstar")
    superstar.style.background = `-webkit-linear-gradient(-30deg, rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)}), rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)}),rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)}))`;
    superstar.style.webkitBackgroundClip = "text";
    superstar.style.webkitTextFillColor = "transparent";
}

// set interval for it too
setInterval(randomColor, 2000)
////////////////////////////////////////////////


////////////////////////////////////////////////
// const menu = document.getElementById('menu')
// const menus = document.getElementsByClassName('menus')
// menu.addEventListener('mouseover', () => {
//     // var childs = menu.childNodes
//     // childs.style.backgroundColor = '#FFB800'
//     // console.log(childs.length())
//     console.log(menus.length())
// })



////////////////////////////////////////////////