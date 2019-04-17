var arr =[];
function array(){
        for (var i=0; i<9; i++){
                arr[i]=[];
     
                for (var j=0; j<1; j++){
                        arr[i][j]="H";
                }
        }
        return arr;
}
a=array();

var count=0;
function change(arg){
        var element=document.getElementById(arg);
        if(count%2==0){
                if (a[arg][0]=="H"){
                        element.innerHTML="X";
                        a[arg][0]="X";
                }
                else if(a[arg][0]=="O"){
                        element.innerHTML="O";
                
                        console.log(a[arg][1]);
                }
                

        }else{
                if (a[arg][0]=="H"){
                        element.innerHTML="O";
                        a[arg][0]="O";
                }
                else if (a[arg][0]=="X"){
                        element.innerHTML="X";
                }
                
        }        
                
                
                
                
       



        count+=1;
}



