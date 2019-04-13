
function create_div() {
 
  for (var i = 0; i < 10; i++) {
  	var node = document.createElement("DIV")
  	var textnode = document.createTextNode(i+1);
  	node.appendChild(textnode);
  	node.className="rm_divs";
  	node.id = 'a'+(i+1);
   document.getElementById("gen_div").appendChild(node);
  }

}

function rm_div(){

	var value = document.getElementById("inp_id").value;
	if( isNaN(value) || (!value) || value > 10 || value < 1){
		alert("Enter correct number");
		return;
	}
	var list = document.getElementById("gen_div"); 
	
	var children = list.childNodes;
	
	for(child in children) {
		var a = children[child];
		
		if(a.innerHTML == value){
			
			list.removeChild(list.childNodes[child]);      
			break;
		}
	}
	var x = list.childElementCount;
	if(x == 0){
		alert("All divs are removed");
		document.getElementById("inp_id").value = "You win";
		return;
	}
}
function add_div(){
	var value = document.getElementById("inp_id").value;
	if( isNaN(value) || (!value) || value > 10 || value < 1){
		alert("Enter correct number");
		return;
	}
	var list = document.getElementById("gen_div"); 
	var x = list.childElementCount;
	
	var children = list.childNodes;


	var div = document.getElementById('a'+(+value));
	
  	if(!document.getElementById("gen_div").contains(div)){

  		var node = document.createElement("DIV")
  		var textnode = document.createTextNode(+value);
  		node.appendChild(textnode);
  		node.id = 'a'+value;
  		node.className = "rm_divs";

  		var i = j = 0;
  		while(i <= x){
  			var a = children[i];
  			if(+a.innerHTML < +value){
  				
  				j++;
  			}
  			i++;
  		}

  		list.insertBefore(node, list.childNodes[j+1]);
  	}
  	
}

