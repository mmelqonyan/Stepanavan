let row = document.getElementById("row").value;
let col = document.getElementById("col").value;

function table() {
    let body = document.getElementsByTagName('body')[0];
    let table = document.createElement("TABLE");

    for (let i = 0; i < row; i++) {
        let tr = document.createElement("TR");
        for (let j = 0; j < col; j++) {
            let td = document.createElement("TD");
            td.appendChild(document.createTextNode(""))
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }
    body.appendChild(table)
}

function checkUserInput(userInput) {
    return !isNaN(userInput) && userInput > 0 && userInput < 11
}

function start() {
    if (checkUserInput(row) && checkUserInput(col)){
        table()
    }
    else {
        alert("Row must be 1-10, and columns 1-10 \n\nReload the page and enter CORRECT data.")
    }
}