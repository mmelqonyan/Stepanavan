var body = document.getElementsByTagName("body")[0]

function table() {
    document.getElementById("input").setAttribute("disabled", "true")
    document.getElementById("button").setAttribute("disabled", "true")
    let rand = 0


    let table = document.createElement("table")
    let span = document.createElement("span")
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr")
        for (let j = 0; j < 10; j++) {

            let td = document.createElement("td")
            let button = document.createElement("button")
            button.setAttribute("style", "height: 45px; width:45px")
            button.setAttribute("onclick", "check(this)")
            td.appendChild(button)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    body.appendChild(table)
    body.appendChild(span)
    document.getElementsByTagName("span")[0].setAttribute("id", "span")

    let mine = document.getElementById("input").value

    let buttons = document.getElementsByTagName("button")
    for (let i = 0; i < mine; i++) {
        rand = Math.floor(Math.random() * 101)

        if (buttons[rand].value == "1") {
            --i;
        }
        else {
            buttons[rand].setAttribute("value", "1")
        }
    }
}


function check(x) {
    if (x.value == 1) {
        x.innerHTML = '&#128163;' 
        document.getElementById("span").innerHTML = "You lose. "
        let buttons = document.getElementsByTagName("button")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("disabled", "true")
        }
        let newGame = document.createElement("button")
        newGame.setAttribute("type", "button")
        newGame.setAttribute("onclick", "location.reload()")
        newGame.innerHTML = "New Game"
        newGame.setAttribute("style", "height: 30px; width:120px")
        body.appendChild(newGame)

    }
    else {
        x.setAttribute("style", "background-color: green; height: 30px; width:30px")
    }
}
function mines() {
    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "Number of mines (5-90).")
    input.setAttribute("id", "input")
    input.setAttribute("onfocus", "this.value=''")

    let start = document.createElement("button")
    start.setAttribute("type", "button")
    start.setAttribute("id", "button")
    start.innerHTML = "Start"
    start.setAttribute("onclick", "checkInput()")
    start.setAttribute("style", "height: 30px; width:100px")

    let signal = document.createElement("span")
    signal.setAttribute("style", "color: red")
    body.appendChild(input)
    body.appendChild(start)
    body.appendChild(signal)
}

function checkInput() {
    let x = document.getElementById("input").value
    if (x < 5 || x > 90 || !(x) || isNaN(x)) {
        document.getElementsByTagName("span")[0].innerHTML = "    Your input must be numbers (5-90)."
    }
    else {
        document.getElementsByTagName("span")[0].innerHTML = ""
        table()
    }
}

mines()