function get_value(arg) {
	var value = document.getElementById(arg.id).value;
	var disp = document.getElementById('display').value;

	if(disp == "" && value == '-'){
		document.getElementById('display').value = '-';
		return;
	}

	if (disp == "" || (disp[disp.length-1] == value )) {
		
		return;
	}
	else if(isNaN(disp[disp.length-1])){
		return;
	}
	
	beginning:disp += value;
	
	document.getElementById('display').value = disp;
	if(disp[disp.length-1] == '='){
		if( eval(disp.substr(0, disp.length-1)) === Infinity){
			document.getElementById("display").value = "ZeroDivisionError";	
			setTimeout(function(){ document.getElementById("display").value = "";}, 1500);
			return;		
		}
		document.getElementById("display").value = disp.substr(0, disp.length-1);
		
		document.getElementById("display").value = eval(disp.substr(0, disp.length-1));
		
		return;
	}

}

