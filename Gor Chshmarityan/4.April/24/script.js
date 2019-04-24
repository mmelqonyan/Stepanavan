function get() {

    $.ajax({

        url: 'https://randomuser.me/api/',

        dataType: 'json',

        success: function (data) {

            let name = data.results[0].name.first;
            document.getElementById("name").innerHTML = name;
            let surname = data.results[0].name.last;
            document.getElementById("surname").innerHTML = surname;
            let gender = data.results[0].gender;
            document.getElementById("gender").innerHTML = gender;
            let age = data.results[0].dob.age;
            document.getElementById("age").innerHTML = age;
            let city = data.results[0].location.city;
            document.getElementById("city").innerHTML = city;
            let street = data.results[0].location.street;
            document.getElementById("street").innerHTML = street;
            let login = data.results[0].login.username;
            document.getElementById("login").innerHTML = login;
            let password = data.results[0].login.password;
            document.getElementById("pass").innerHTML = password;


        }
    });
}






