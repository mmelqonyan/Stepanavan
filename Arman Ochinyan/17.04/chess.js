function create_table() {
   
    var body1 = document.getElementsByTagName("body")[0];

    var mytable = document.querySelectorAll("table");
    if (mytable.length > 0) {
        mytable[0].remove();
    }
    var table1 = document.createElement("table");

    var k = 0;
    for(let i = 0; i < 3;i++){
        var tr1 = document.createElement("tr");
            for(let j = 0; j < 3; j++){
                var td1 = document.createElement("td");
                td1.setAttribute("onclick", "x_0(this)");
                td1.setAttribute("id", "a"+ k++);
                tr1.appendChild(td1);
                    
            }
        table1.appendChild(tr1);
    }
    
    body1.appendChild(table1);
    table1.setAttribute("border", "2");
    table1.setAttribute("id", "table");
    table1.setAttribute("style","background-color:blue;margin: 0 auto");
    document.getElementById('pmassege').innerHTML = "";

 }
 var chack = 0;
  
 function x_0(arg){
    var matrix = []; 
    var td = document.getElementById(arg.id);
        
        if(td.innerHTML === "X" || td.innerHTML === '0'){
            chack = 0;
            return;
        }
        if( chack%2 == 0){
            td.innerHTML = "X";
            chack++;        
        }else if((td.innerHTML !== "X" || td.innerHTML !== '0')){
            td.innerHTML = 0;
            chack++;         
        }
    
    var Table1 = document.getElementById('table');
    var a = 0;
    for (var r = 0; r < 3; r++) {
        
        for (var c = 0; c < 3; c++) {
            if (Table1.rows[r].cells[c].innerHTML) {
                 matrix[r*3+c] = Table1.rows[r].cells[c].innerHTML; 
            }            
        } 
    }
    if(chack > 4){
        var sim = AllTheSame(matrix);
        if(sim == 'X')
        {
            document.getElementById('pmassege').innerHTML = "Winner is "+ sim; 
        }else if(sim == 0){
            document.getElementById('pmassege').innerHTML = "Winner is "+ sim;
        }
    }
}
function AllTheSame(board) {

    for (var x = 0; x < 3;x++)
    {
        if (board[x*3] == board[x*3 + 1] && board[x*3] == board[x*3 + 2] && (board[x*3] == "X" || board[x*3] == 0 ))
        { 
            return board[x*3];
        }    
        else if (board[x] == board[x+3] && board[x+3] == board[x+6] && (board[x] == "X" || board[x] == 0 )){
            return board[x+3] ;
        }     
        else if ((board[0] == board[4] && board[4] == board[8]) || (board[2] == board[4] && board[4] == board[6]) && (board[4] == "X" || board[4] == 0 )){
            return board[4];
        }  

    }
    if (board.reduce(function(total,x){return x=="X" || x==0 ? total+1 : total}, 0) == 9) {
        document.getElementById('pmassege').innerHTML = "No Winner ";
    }
}

