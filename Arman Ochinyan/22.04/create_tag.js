

var obj = {

	create:function () {

		var display = document.getElementById('display').value;
		if (!display) {
			return;
		}

		var body = document.getElementsByTagName("body")[0];
		if (display.indexOf(",") < 0) {
			display = display.replace(" ",",");
		}
		display = display.replace(/\s/g, "");
		var arr = display.split(",");

		if (!arr[1]) {
			var tag = document.createElement(arr[0,arr.indexOf(",")]);
		}else{
			var tag = document.createElement(arr[0]);
		}

		tag.innerHTML = arr[0];
		tag.style.border ='1px solid black';

		if(arr[1] && (arr[1].split("=")[0] == 'w' || arr[1].split("=")[0] == 'width')) {
			tag.style.width = arr[1].split("=")[1]+'px';
			
		}else if(arr[2] && (arr[2].split("=")[0] == 'w' || arr[2].split("=")[0] == 'width')){
			tag.style.width = arr[2].split("=")[1]+'px';
		}else if(arr[1] && (arr[1].split("=")[0] == 'h' || arr[1].split("=")[0] == 'height')) {
			tag.style.height = arr[1].split("=")[1]+'px';
			
		}else if(arr[2] && (arr[2].split("=")[0] == 'h' || arr[2].split("=")[0] == 'height')){
			tag.style.height = arr[2].split("=")[1]+'px';
		}
		

		body.appendChild(tag);
		document.getElementById('display').value = "";

	}



}