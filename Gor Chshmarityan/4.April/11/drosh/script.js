var i = 0;
      function gor(){
             var x = ["red", "blue", "orange"];

           while(i <= 2){
                document.getElementById("var").style.backgroundColor = x[i];
               i++;
               return;
           }
           i = 0;
           document.getElementById("var").style.backgroundColor = x[i++]

      }