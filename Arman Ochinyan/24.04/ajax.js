function mm(){

	$.ajax
	({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		success: function(data)
		{
		    var name = data.results[0].name.first ;
		    var surname = data.results[0].name.last;
		    document.getElementById('gender').innerHTML = 'Gender '+ data.results[0].gender;
		    document.getElementById('namesur').innerHTML = 'Name '+ name[0].toUpperCase() + name.slice(1) +'<br>Surname ' +surname[0].toUpperCase() + surname.slice(1);
		  
		    document.getElementById('registred').innerHTML = 'Registred '+data.results[0].registered.date + '<br>Registred age '+data.results[0].registered.age;
		    document.getElementById('loginpass').innerHTML ='Login '+ data.results[0].login.username + '<br>Password '+ data.results[0].login.password ;
		    document.getElementById('email').innerHTML = 'Email: '+ data.results[0].email;
		    document.getElementById('imgitem').setAttribute("src", data.results[0].picture.large); 

	    }
    });


}



