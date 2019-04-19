
var matrix = [];  
function create_table() {
   
    var body1 = document.getElementsByTagName("body")[0];

    var mytable = document.querySelectorAll("table");
    if (mytable.length > 0) {
        mytable[0].remove();
    }
    
    var table1 = document.createElement("table");

    for(let i = 0; i < 10;i++){
        var tr1 = document.createElement("tr");
            for(let j = 0; j < 10; j++){
                var td1 = document.createElement("td");
                td1.setAttribute("onclick", "change_bg(this)");
                td1.setAttribute("value", i * 10 + j);
                td1.setAttribute("id", 'a'+(i * 10 + j));
                matrix[i * 10 + j] = ['&#10004','&#9762','&#10004','&#10004','&#10004'].random();
                
                td1.setAttribute("style","display-none");
                
                tr1.appendChild(td1);
                    
            }
        table1.appendChild(tr1);
    }
    
    body1.appendChild(table1);
    table1.setAttribute("border", "2");
    table1.setAttribute("id", "table");
   
   
 }

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

 
 var k = 3;
 function change_bg(td){

    
    td.innerHTML = matrix[td.getAttribute("value")];
    if (matrix[td.getAttribute("value")] == '&#9762') {

        document.getElementById('pmassege').innerHTML = "You have "+`${--k}`+" chances";
        
           
       

        if(k == 0){
            document.getElementById('pmassege').innerHTML = "You you lost"; 
               
            var i = 0;
            var show = setInterval(function() {
                document.getElementById('a'+i).innerHTML = matrix[i];
                if(++i >= 100) {
                    clearInterval(show);
                    var j = 0;
                    var hide = setInterval(function() {
                            document.getElementById('a'+j).innerHTML = "";
                            if(++j >= 100) {
                                clearInterval(hide);
                                document.getElementById('pmassege').innerHTML = "You have 3 chances";
                                k = 3;
                                return;
                            }
                        }, 20);
                    }
                }, 20);
            }
    }
   
}
