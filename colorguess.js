var colors = [];
var numSquares = 6;
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var result = document.getElementById("result");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init () {
	// mode buttons
	modeButtonsSetup();
	squaresSetup();
	resetColors();
}

function modeButtonsSetup () {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(argument) {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSquares = 3;
			}
		else{
			numSquares = 6;
			}
		resetColors();
		})
	}
}

function squaresSetup () {
	for (var i = 0 ; i<squares.length; i++) {
	//adding click Listners to Squares
	squares[i].addEventListener("click",function(){
		// grab color of picked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			result.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else{
			this.style.background = "#232323";
			result.textContent = "Try Again";
		}
		});
	}
}

function resetColors () {
	// generate all new colors
	colors = genetareRandomColors(numSquares);
	// pick a random target color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	result.textContent = "";
	resetButton.textContent = "New Colors";	
	// change colors of squares
	for (var i = 0 ; i<squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}

}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click",function () {
	resetColors();
});


function changeColors (color) {
	//loop through all the colors
	for (var i = 0; i < squares.length; i++) {
		// change each color to match pickedColor color
		squares[i].style.background = color;
	};
	
}

function pickColor () {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function genetareRandomColors (num) {
	// make an array
	var arr = [];
	// add num random color to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor()); 
	};
	// return the array
	return arr;
}

function randomColor () {
	// random for red 0-255
	var r = Math.floor(Math.random()*256);
	// random for green 0-255
	var g = Math.floor(Math.random()*256);
	// random for blue 0-255
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}