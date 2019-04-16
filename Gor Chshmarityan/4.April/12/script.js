let main = document.querySelector("main");

function create() {
    let divs = [];
    for (let i = 1; i < 11; i++) {
        let div = document.createElement("div");
        div.innerHTML = i;
        div.classList.add("overlay");

        divs.push(div);
    }

    return divs

}

function draw(divs) {
    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "1-10")
    input.setAttribute("id", "input")
    input.setAttribute("onfocus","this.value=''")
    input.classList.add("input")
    input.setAttribute("size", "1")
    document.body.append(input)

    let button = document.createElement("input")
    button.setAttribute("type", "button")
    button.setAttribute("value", "Remove")
    button.classList.add("button")
    button.setAttribute("onclick", "rm()")
    document.body.append(button)
    
    for (const div of divs) {
        document.body.appendChild(div);
    }
}
draw(create())
function rm() {
    var value = document.getElementById("input").value
    var father = document.getElementById("body")
    var sons = father.childNodes
    if( value>10 || value<1 || isNaN(value) || (!value)){
        alert("Try again.")
        return;
    }
    for (son in sons) {
        var temp = sons[son];
        if (temp.innerHTML == value) {
            father.removeChild(father.childNodes[son]);
            break;
        }
    }
    var temp = father.childElementCount
    if(temp == 2){
        alert("You win.")
    }
}



