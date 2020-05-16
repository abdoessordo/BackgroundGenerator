const h3 = document.querySelector('h3')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const body = document.getElementById('body')

function setGradiant(){
    body.style.background = 
    "linear-gradient(to right,"
     + color1.value + "," + color2.value + ")"
}

color1.addEventListener("input", setGradiant);

color2.addEventListener("input", setGradiant);

var text = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")"

h3.innerHTML = text