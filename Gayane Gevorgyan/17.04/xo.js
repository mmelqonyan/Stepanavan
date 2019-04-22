var arr;
var q; 
var usedCnt; 

function create() {
    var num = document.getElementById("num").value;
    document.getElementById("tableContainer");

    arr =[];
 	q = "X";
	usedCnt = 0;

    let table = "<table border='1'>";
    for (let i = 0; i < num; i++) {
        arr.push([])
        table += "<tr>";
        for (let j = 0; j < num; j++) {
            table += "<td>";
            table += "<button name='charbtn' onclick='doYourStep(this)' i=" + i + " j=" + j + ">";
            table += "</button > ";
            table += "</td > ";
            arr[i].push("");
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("tableContainer").innerHTML = table;
}

function doYourStep(obj) {
    
    obj.innerText = q;
    arr[obj.getAttribute("i")][obj.getAttribute("j")] = q;

	usedCnt++;
	obj.disabled = true;
    check(obj.getAttribute("i"), obj.getAttribute("j"));

	if (q == "X") {
        q = "0";
    } else {
        q = "X";
    }
}

function checkPrimaryDiaganal(){
	let num = arr.length;
	let diag = 0;

	for(let i=0; i<num; i++){
		if (arr[i][i] == q) {
           	diag += 1;
		}
	}
	if(num == diag){
		document.getElementById("msgContainer").innerText = "Win!!!";
		return true;
	}
	return false;
}

function checkSecondaryDiaganal(){
	let num = arr.length;
	let diag = 0;

	for(let i=0; i<num; i++){
		if (arr[i][num - 1 - i] == q) {
           	diag += 1;
		}
	}
	if(num == diag){
		document.getElementById("msgContainer").innerText = "Win!!!";
		return true;
	}
	return false;
}


function checkColumn(j){
	let num = arr.length;
	let col = 0;

	for(let i=0; i<num; i++){
		if (arr[i][j] == q) {
           	col += 1;
		}
	}
	if(num == col){
		document.getElementById("msgContainer").innerText = "Win!!!";
		return true;
	}
	return false;
}

function checkRow(i){
	let num = arr.length;
	let row = 0;

	for(let j=0; j<num; j++){
		if (arr[i][j] == q) {
           	row += 1;
		}
	}
	if(num == row){
		document.getElementById("msgContainer").innerText = "Win!!!";
		return true;
	}
	return false;
}


function check(i,j) {
    let msgContainer = document.getElementById("msgContainer");
   
	let num = arr.length;

    msgContainer.innerText = "";

	if(i == j && checkPrimaryDiaganal()){
		return;
	} 
  
	if(i == num - 1 - j && checkSecondaryDiaganal()){
		return;
	}

    if(checkColumn(j)){
		return;
	}

	if(checkRow(i)){
		return;
	}

	if(usedCnt == num*num){
		document.getElementById("msgContainer").innerText = "Try again!";
	}
}




