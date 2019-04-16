let USERS = [];

let login = document.getElementById("login")
let password = document.getElementById("password");
let name = document.getElementById("name")
let surname = document.getElementById("surname");
let submit = document.getElementById("submit");

login.oninput = function(){
    modifyInvalidFieldOnInput(login)
}
password.oninput = function(){
    modifyInvalidFieldOnInput(password)
}
name.oninput = function(){
    modifyInvalidFieldOnInput(name)
}
surname.oninput = function(){
    modifyInvalidFieldOnInput(surname)
}



submit.onclick = function(event) {
    fieldsIsValid = validateFields(login, password, name, surname)
    
    if(fieldsIsValid){
        let user = createUser(login.value, password.value, name.value, surname.value)
        USERS.push(user);
        console.log(USERS)
        clearFields(login, password, name, surname);
        updatedUsers(user)
    }

}

function updatedUsers(user){
    let usersContainer = document.getElementById("users-container")
    let li = document.createElement("li");
    li.innerHTML = `Name - ${user["name"]} Surname - ${user["surname"]}`
    usersContainer.appendChild(li)

}

function validateFields(usernameField, passwordField, nameFiled, surnameField){
    let isValid = true;
    if(usernameField.value === ""){
        modifyInvalidField(usernameField, "Login is not valid")
        isValid =  false;
    }
    if(passwordField.value === "" || passwordField.value.length < 6) {
        modifyInvalidField(passwordField, "Password is not valid")
        isValid =  false;
    }
    if(nameFiled.value === ""){
        modifyInvalidField(nameFiled, "Name is not valid")
        isValid = false;
    }
    if(surnameField.value === ""){
        modifyInvalidField(surnameField, "Surname is not valid")
        isValid =  false;
    }
    return isValid;
}

function validateField(field){
    if(field.value.length < 5){
        return  false;
    }
    return true;
}

function modifyInvalidField(field, errorMessage){
    let border = field.style.border
    field.value = "";
    field.style.border = "2px solid red";
    field.placeholder = errorMessage
    field.onfocus = function(){
        field.style.border = border;
        field.placeholder = ""
    }
}

function modifyInvalidFieldOnInput(field, errorMessage){
    if(!validateField(field)){
        field.style.border = "2px solid red";
    }
    else{
        field.style.border = "2px solid green";
    }
}

function clearFields(usernameField, passwordField, nameFiled, surnameField){
    usernameField.value = "";
    passwordField.value = "";
    nameFiled.value = "";
    surnameField.value = "";
}

function createUser(login, password, name, surname){
    return {
        "login":login,
        "password":password,
        "name":name,
        "surname":surname
    }
}