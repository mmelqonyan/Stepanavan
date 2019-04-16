
function table() {
    let row = document.getElementById("row").value;
    let col = document.getElementById("col").value;
    let body = document.getElementsByTagName('body')[0];
    let table = document.createElement("TABLE");
    if (checkUserInput(row) && checkUserInput(col)) {
        var temp = document.querySelectorAll("table");
        if (temp.length > 0) {
            temp[0].remove();
        }
        document.getElementById("span").innerHTML = ""

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
    else {
        var temp = document.querySelectorAll("table");
        if (temp.length > 0) {
            temp[0].remove();
        }
        document.getElementById("span").innerHTML = "Row must be 1-10, and columns 1-10 , enter correct data."

    }
    document.getElementById("row").value = ""
    document.getElementById("col").value = ""
}


function checkUserInput(userInput) {
    return !isNaN(userInput) && userInput > 0 && userInput < 11
}

