var x;
var count;
var y;
var count1;

function num() {

	count = Math.floor(Math.random() * 6) + 1;

	switch (count) {

		case 1:
			x = '&#x2680'
			break;

		case 2:
			x = '&#x2681'
			break;

		case 3:
			x = '&#x2682'
			break;

		case 4:
			x = '&#x2683'
			break;

		case 5:
			x = '&#x2684'
			break;

		case 6:
			x = '&#x2685'
			break;

	}
	document.getElementById("var").innerHTML = x;
}



function num1() {
	count1 = Math.floor(Math.random() * 6) + 1;

	switch (count1) {
		case 1:

			y = '&#x2680'
			break;

		case 2:
			y = '&#x2681'

			break;

		case 3:
			y = '&#x2682'
			break;

		case 4:
			y = '&#x2683'
			break;

		case 5:
			y = '&#x2684'
			break;

		case 6:
			y = '&#x2685'
			break;

	}
	document.getElementById("var1").innerHTML = y;
}


function check() {
	var check_num = document.getElementById("input").value;
	if (check_num < 13 && check_num > 1) {
		if (count + count1 == check_num) {
			document.getElementById("result").innerHTML = "You win";

		}
		else {
			document.getElementById("result").innerHTML = "You lose";
		}
	}

	else {
		document.write("Try Again, wrong input")
	}

}