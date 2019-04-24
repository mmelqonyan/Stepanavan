
function create(){
	var inpt = document.getElementById("inp").value;
	document.getElementById("divContainer");

	let div = "<div>";
	div += inpt;
	div += "<p>";

	div += "It's your new div";
	div += "</p>";
	div += "</div>";
 
    document.getElementById("divContainer").innerHTML = div;
}


