function ch_zar(){
	
	var a =  Math.floor(Math.random() * 6);
	document.getElementById('div1').innerHTML = '&#98'+(56 + a);
	var b =  Math.floor(Math.random() * 6);
	document.getElementById('div2').innerHTML = '&#98'+(56 + b);
	check(a + b + 2);
}

function check(arg) {
	
  	var count = prompt("Please enter number ");
	if ( isNaN(count) || (!count) || count > 12 || count < 2){
		document.getElementById('demo').innerHTML = "Enter correct number (2-12)";
		return;
	}
  	if (count > arg) {
  		document.getElementById('demo').innerHTML = "Your entred number "+count+" > "+ arg;;
  	}
  	else if(count < arg){
  		document.getElementById('demo').innerHTML = "Your entred number "+count+" < "+ arg;;
  	}else{
  		document.getElementById('demo').innerHTML = "You win "+count+" == "+ arg;;
  	}
  		
	
}