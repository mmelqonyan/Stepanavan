var a = 0;
function ch_col() {
	if (a == 3) {
		a = 0
	}
	var colors = ["red", "blue", "orange"];
	
	document.getElementById("myDIV").innerHTML =  colors[a];
 	document.getElementById("myDIV").style.backgroundColor = colors[a];

 	document.getElementById("myDIV").style.fontSize = Math.floor(Math.random() * (50 - 10 + 1) ) + 10+"px";
	a++;
}

function rand_chars(){
       var container =[]
       random_ascii = Math.floor((Math.random() * 5) + 97);
       container[0] = String.fromCharCode(random_ascii);
       container[1] = Math.floor(Math.random() * 15);
       var color = container[ Math.floor(Math.random() * 2) ];
    return color
}

function ch_col_rand() {
	if (a == 3) {
		a = 0
	}
	var color = ''
	for (var i = 0; i < 6; i++) {
		color += rand_chars()
	}
	document.getElementById("myDIV2").style.backgroundColor = "#"+color;
  
}