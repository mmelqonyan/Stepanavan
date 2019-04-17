
var num = 0;
document.getElementById("game").onclick = function(event){
    console.log(event);
     
    if(event.target.className =="block"){
       if(num%2 == 0){
       event.target.innerHTML = "x";
       }
     else{
           event.target.innerHTML = "0";
     } 

     num++;
     
      
   }

}

  

