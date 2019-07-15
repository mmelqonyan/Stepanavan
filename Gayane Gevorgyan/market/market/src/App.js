import React from 'react';


function App(){

let obj= {
name: ["Կանացի կոշիկ", "Տղամարդու կոշիկ", "Պայուսակ", "Գոտի", "Դրամապանակ", "Բաճկոն"], 
price: [18500, 21500, 16000, 15000, 11000, 48000], 
img: ["․/img/wshoes.jpg", "./img/mshoes.jpg", "./bag.jpg", "./img/g.jpg", "./img/acc.jpg", "./img/kurt.jpg"],
};

var num=0;
function rating(){
  for(var i=0; i<1000; i++){
    num+=1;
  };
}

class Market extends React.Component {  
    render() {  
        return (
        <div>
				  <div className="card col-md  div" style="width:300px">
					  <img src="{this.props.img[0]}" className="" alt="Responsive image"></img>		
					  <div className="card-body">
						  <h4 className="card-title"> {this.props.name[0]} </h4>
						  <p className="card-text">Բնական կաշի</p>
						  <p className="card-text">Գինը  {this.props.price[0]} դր․</p>
						  <button className="btn btn-primary" onClick="">&#9733;<p id="num"></p></button>					
						  <button className="btn btn-primary" onClick={rating()}>Next</button>		
						  <button className="btn btn-primary"onClick="">Delete</button>									
					  </div>
				  </div>
				  </div>
				
)};
 
}
};





export default App;


