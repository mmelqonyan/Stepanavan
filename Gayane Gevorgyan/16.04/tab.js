function create(){
  var body = document.getElementsByTagName("body")[0];
  var rows = document.getElementsByTagName("row").value;
  var columns = document.getElementsByTagName("column").value;

  var table= document.createElement("table");

  for (var r = 0; r < rows; r++){
	var trs = document.createElement("tr");	

   for (var c = 0; c < columns; c++){
	var tds = document.createElement("td");	
	var text= document.createTextNode("");
	tds.appendChild(text);
	trs.appendChild(tds);
}
	table.appendChild(trs);
}
	
	body.appendChild(table);	
}
