
function create_table() {
   
    var body1 = document.getElementsByTagName("body")[0];

    var promp1 = document.getElementById("first").value;
    var promp2 = document.getElementById("second").value;

    if(!promp1 || !promp2 || promp1 > 20 || promp1 < 1 || promp2 > 20 ||promp2 < 1){
        document.getElementById('pmassege').innerHTML = "Enter correct number(1-20)";
        document.getElementById("first").value = "";
        document.getElementById("second").value = "";
        return;
    }  
    var mytable = document.querySelectorAll("table");
    if (mytable.length > 0) {
        mytable[0].remove();
    }
    
    var table1 = document.createElement("table");


    for(let i = 0; i < promp1;i++){
        var tr1 = document.createElement("tr");
            for(let j = 0; j < promp2; j++){
                var td1 = document.createElement("td");
                if((j + i) % 2 == 0){

                    tr1.appendChild(td1);
                    var input = document.createElement("BUTTON");
                    input.innerHTML="Click me";
                    td1.appendChild(input);
                }else{

                    var text1 = document.createTextNode(`${j+i} barev`);
                    td1.appendChild(text1);
                    tr1.appendChild(td1);
                    
                }
            }
        table1.appendChild(tr1);
    }
    
    
    body1.appendChild(table1);
    table1.setAttribute("border", "2");
    table1.setAttribute("style","background-color:blue;margin: 0 auto");
   
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById('pmassege').innerHTML = "";

    

 }