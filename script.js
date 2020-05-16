var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2. value 
	+ ")";

	h3.textContent = body.style.background + ";";
}

function randHex() {
	var number = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
	while(number.length < 6) {
		number = '0' + number;
	}
	return '#' + number;
}

function generateRandomColor () {
	color1.value = randHex();
	color2.value = randHex();
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", generateRandomColor);