function create_table() {
   
    var body1 = document.getElementsByTagName("body")[0];

    var mytable = document.querySelectorAll("table");
    if (mytable.length > 0) {
        mytable[0].remove();
    }
    
    var table1 = document.createElement("table");

    var k = 0;
    for(let i = 0; i < 30;i++){
        var tr1 = document.createElement("tr");
            for(let j = 0; j < 30; j++){
                var td1 = document.createElement("td");
                td1.setAttribute("onclick", "change_bg(this)");
                td1.innerHTML = '&#10004';
                td1.setAttribute("id", "a"+ k++);
                tr1.appendChild(td1);
                    
            }
        table1.appendChild(tr1);
    }
    
    body1.appendChild(table1);
    table1.setAttribute("border", "2");
    table1.setAttribute("id", "table");
    table1.setAttribute("style","background-color:#c6ffb3;");
   
 }
 var chack = 0;
 var matrix = [];  
 function change_bg(arg){

    var td = document.getElementById(arg.id);  
    var Table1 = document.getElementById('table');
    
    if(td.innerHTML != '&#10004' || td.innerHTML != '&#10006'){
        td.innerHTML = '&#10006';
    }

    for (var r = 0; r < 30; r++) {
        matrix[r] = [];
        
        for (var c = 0; c < 30; c++) {
                matrix[r][c] = Table1.rows[r].cells[c].innerHTML;
                
        }
        
    }
    console.log(matrix);
}
