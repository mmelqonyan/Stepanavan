let array = [];
let data = {};
let count = 0;
function append(arg) {
    array.push(arg)
    console.log(array)
}

function create() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    data["Login"] = login;
    data["Password"] = password;
    data["Name"] = name;
    data["Surname"] = surname;
    return data;
}

function start() {
    check();
    if (count == 1) {
        append(create());
        count = 0;
    }
}

function check() {
    tempLogin = document.getElementById("login").value
    tempPassword = document.getElementById("password").value
    tempName = document.getElementById("name").value
    tempSurname = document.getElementById("surname").value
    const user = array.find(user => user.Login === tempLogin)
    if(typeof(user) == "object"){
        document.getElementById("log").innerHTML = "This login already exist."
        return;
    }

    if ((!tempLogin) || tempLogin.length < 3) {
        document.getElementById("log").innerHTML = "Your login must be 3-12 characters."
        return;
    }
    else {
        document.getElementById("log").innerHTML = ""
    }


    if ((!tempPassword) || tempPassword.length < 5) {
        document.getElementById("pass").innerHTML = "Your password must be 5-12 characters."
        return;
    }
    else {
        document.getElementById("pass").innerHTML = ""

    }
    if ((!tempName) || tempName.length < 5) {
        document.getElementById("nam").innerHTML = "Your name must be 5-12 characters."
        return;
    }
    else {
        document.getElementById("nam").innerHTML = ""

    }
    if ((!tempSurname) || tempSurname.length < 5) {
        document.getElementById("surnam").innerHTML = "Your surname must be 5-12 characters."
        return;
    }
    else {

        document.getElementById("surnam").innerHTML = ""

    }
    count++

}