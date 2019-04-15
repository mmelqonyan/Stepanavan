
var index = 0;
var arrdata = [];
var data = {};

function get_value() {

	var name = document.getElementById('name').value;
	
	if((!isNaN(name))|| (!name) || name.length < 3){
		document.getElementById('span_id').innerHTML = "Enter correct name";
		return;
	}
	data.vname = name;

	var surname = document.getElementById('surname').value;
	
	if( (!isNaN(surname)) || (!surname) || surname.length < 5){
		document.getElementById('span_id').innerHTML = "Enter correct surname"
		return;
	}
	data.vsurname = surname;
	
	var login = document.getElementById('login').value;
	
	const user = arrdata.find(user => user.vlogin === login);
	if(user){
		document.getElementById('span_id').innerHTML = "Enter Other login";	
		return;
	}
		
	if((!login) || login.length < 5){
		document.getElementById('span_id').innerHTML = "Enter correct login";
		return;
	}
	data.vlogin = login;
	
	var password = document.getElementById('password').value;
	if((!password) || password.length < 5){
		document.getElementById('span_id').innerHTML = "Enter correct password";
		return;
	}

	var confirm = document.getElementById('confirm').value;
	if(confirm !== password){
		document.getElementById('span_id').innerHTML = "Confirm password not equal";
		return;
	}
	if(password === name ){
		document.getElementById('span_id').innerHTML = "Password and name is same as: Try New";
		return;
	}

	data.vpassword = password;


	document.getElementById('name').value = "";
	document.getElementById('surname').value = "";
	document.getElementById('login').value = "";
	document.getElementById('password').value = "";
	document.getElementById('confirm').value = "";
	
	document.getElementById('span_id').innerHTML = "Congratulations you create your account";
	arrdata.push(data);
	console.log(arrdata);
}