let columnsCount = undefined;
let rowsCount = undefined;


let infoSpan = document.createElement("span");
let errorSpan = document.createElement("span");
errorSpan.setAttribute("id", "error")
errorSpan.style.display = "none"
infoSpan.innerHTML = "Just write rows and columns count: "
let rowsInput = document.createElement("input");
rowsInput.placeholder = "Rows 0 - 100"
let columnsInput = document.createElement("input");
columnsInput.placeholder = "Columns 0 - 100"

function drawTable(){
    if(document.getElementById("main-table") !== null){
        document.getElementById("main-table").remove(); 
    } 
    let table = createTable(()=>{
        if(rowsCount && columnsCount!== undefined){
            showError("Invalid size (Please use 1 - 100)")
        }
    })
    if(table !== undefined){
        hideError();
        document.body.appendChild(table);
    }
}

function showError(message){
    errorSpan.style.display = "inline";
    errorSpan.innerHTML = message;
}

function hideError(){
    errorSpan.style.display = "none";
}

rowsInput.onkeyup = function (){
    rowsCount = parseInt(this.value);
    startShow();
}
columnsInput.onkeyup = function (){
    columnsCount = parseInt(this.value);
    startShow();
}

function startShow(){
    if(isNaN(columnsCount) && rowsCount!== undefined && isNaN(rowsCount) && columnsCount!== undefined){
        showError("Please input number not a letters");
    }else{
        hideError()
        drawTable();
    }
}

document.body.appendChild(infoSpan);
document.body.appendChild(rowsInput);
document.body.appendChild(columnsInput);
document.body.appendChild(errorSpan)

function createTable(onError){
    if(columnsCount > 0 && columnsCount <= 100 && rowsCount > 0 && rowsCount <= 100)
    {
        let x = 0;
        var sexan = document.createElement("table");
        sexan.setAttribute("id", "main-table")
        for(let i = 0; i < rowsCount; ++i){
            let tr = document.createElement("tr");
            for(let j = 0; j < columnsCount; ++j){
                
                let td = document.createElement("td");
                td.innerHTML = ++x;
                tr.appendChild(td);
            }
            sexan.appendChild(tr);
        }
        return sexan;
    }
    onError();
}