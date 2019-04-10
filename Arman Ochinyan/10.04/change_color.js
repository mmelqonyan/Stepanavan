var a = 0;
function ch_col() {
	if (a == 3) {a = 0;}
	var colors = ["red", "blue", "orange"];
	
	document.getElementById("myDIV").innerHTML = colors[a];
 	document.getElementById("myDIV").style.backgroundColor = colors[a];

 	document.getElementById("myDIV").style.fontSize = Math.floor(Math.random() * (50 - 10 + 1) ) + 10+"px";
	a++;
}

function rand_chars(){
	    var container = 0;
	    var color = '';
	    
	    container = Math.floor(Math.random() * 15);
	    if (container >= 10) {
	    	color = String.fromCharCode(container+87);
	    }else{
	    	color = container;
	    }
	    
    return color
}

function ch_col_rand() {
	
	var color = ''
	for (var i = 0; i < 6; i++) {
		color += rand_chars()
	}
	document.getElementById("myDIV2").style.backgroundColor = "#"+color;
  
}