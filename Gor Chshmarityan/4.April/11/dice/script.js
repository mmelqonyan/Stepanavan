var x;
var count;
var y;
var count1;

function num(){
	count = Math.floor(Math.random() * 6)+1;
	switch(count){
		case 1:
			x='&#x2680' 
			;
			break;
		case 2:
			x='&#x2681' 
			break;
		case 3:
			x='&#x2682' 
			break;
		case 4:
			x='&#x2683' 
			break;
		case 5:
			x='&#x2684' 
			break;
		case 6:
			x='&#x2685' 
			break;
	}	
	document.getElementById("var").innerHTML = x
}

function num1(){
	count1 = Math.floor(Math.random() * 6)+1;
	switch(count1){
		case 1:
			y='&#x2680' 
			break;
		case 2:
			y='&#x2681' 
			break;
		case 3:
			y='&#x2682' 
			break;
		case 4:
			y='&#x2683' 
			break;
		case 5:
			y='&#x2684' 
			break;
		case 6:
			y='&#x2685' 
			break;
	}
	document.getElementById("var1").innerHTML = y;
}

function check(){
	var win = "You WIN!!!";
	var lose = "You Lose.";
	var range = "Warning!!! Your input must be in range 2-12";
	var gor = document.getElementById("input").value;
	if (count+count1 == gor){
		document.getElementById("result").innerHTML = win.fontcolor( "green" );
		}
	else{
		if (gor < 2 || gor > 12){
			document.getElementById("result").innerHTML = range.fontcolor("orange");
		}
		else{
			document.getElementById("result").innerHTML = lose.fontcolor("red");
		}
	}
}

