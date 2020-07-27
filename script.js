var colors = generateRandomColors(6);

var squares =  document.querySelectorAll(".square") ;
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i< squares.length;i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];
	//add clicklistener to squares
	squares[i].addEventListener("click",function () {
		var clickedColor = this.style.background;
		  if(clickedColor===pickedColor){
		  	messageDisplay.textContent = "Bravo!Correcto!"
		  	changeColors(clickedColor);
		  }
		  else{
		  	this.style.background = "#232323";
		  	messageDisplay.textContent = "try again.";
		  }

	});
}

function changeColors(color){
	for (var i=0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for (var i=0;i<num;i++){

	}
	return arr;

}

function randomColor() {
	// body...
}




