let count = 0;
let array = []
for (let i = 0; i < 3; i++) {
	array.push([])
	for (let j = 0; j < 3; j++) {
		array[i].push("*")
	}
}

function set(x, y) {
	if (count % 2 == 0) {
		document.getElementById(`td${x}${y}`).innerHTML = "X";
		array[x][y] = "X"
		count++
		if (count > 4) {
			check()
		}
	}
	else {
		document.getElementById(`td${x}${y}`).innerHTML = "O";
		array[x][y] = "O"
		count++
		if (count > 4) {
			check()
		}
	}
}

function check() {
	for (let i = 0; i < 3; i++) {

		if (array[i][0] == array[i][1] && array[i][0] == array[i][2] && array[i][0] != "*") {
			document.getElementById("span").innerHTML = `Congratulations ${array[i][0]}`
			button()
		}
		else if (array[0][i] == array[1][i] && array[0][i] == array[2][i] && array[0][i] != "*") {
			document.getElementById("span").innerHTML = `Congratulations ${array[0][i]}`
		
			button()
		}
	}

	if (array[0][0] == array[1][1] && array[0][0] == array[2][2] && array[0][0] != "*") {
		document.getElementById("span").innerHTML = `Congratulations ${array[1][1]}`
		button()
	}
	else if (array[0][2] == array[1][1] && array[1][1] == array[2][0] && array[1][1] != "*") {
		document.getElementById("span").innerHTML = `Congratulations ${array[1][1]}`
		button()
	}
	if (count == 9) {
		document.getElementById("span").innerHTML = `Nobody WIN`
	}
}

function button(){
	let tags = document.getElementsByTagName("button");
	for(let i = 0; i < tags.length; i++){
		tags[i].setAttribute("disabled","true")
	
	
	}
	
	


}





