import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import  './css/Home.css';
// const images = [
//   "https://img2.akspic.ru/image/46291-dikaya_mestnost-ozero-pustynya-boloto-priroda-1920x1080.jpg",
//   "https://s1.1zoom.ru/b5050/186/Norway_Mountains_Lake_488324_1920x1080.jpg",
//   "http://wallpapers-images.ru/1920x1080/nature/wallpapers/nature-wallpapers-1920x1080-00014.jpg",
//   "https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg",
 
// ];
// function ImagesList(props){
//   const images = props.images;
// const listImages =  images.map((image) =>
// <div style={{'backgroundImage':`url(${image})` }}> </div>
// );
// return(
//   <div>{listImages}</div>
// );
// }
// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true
// }

// class Home extends Component {
//   state = {
//     images: [
//       {id:1, path:"https://img2.akspic.ru/image/46291-dikaya_mestnost-ozero-pustynya-boloto-priroda-1920x1080.jpg"},
//       {id:2, path:"https://s1.1zoom.ru/b5050/186/Norway_Mountains_Lake_488324_1920x1080.jpg"},
//       {id:3, path: "http://wallpapers-images.ru/1920x1080/nature/wallpapers/nature-wallpapers-1920x1080-00014.jpg"},
//       {id:4, path:"https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg"},
//     ]
//  }
//  render() {
//   return (
//     <div>
//     this.state.images.map((images, index) => {
    
//       return(
//        <div>
//          <Slide>
       
//           <div className="each-slide">
//            <div  style={{'backgroundImage':path }}> </div>
//           </div>
//           </Slide>
//           </div>
//       );
//     })
//     </div>
//   );
//  }
// }
// render(){
  




//   return (
    
//         <Slide {...properties}>
//       <div className="each-slide">
//       < ImagesList images={images}/>
                 
//                 </div>

//       </Slide>

//   );
// }


// }


    
    
     
        
      
    

// export default Home


class Home extends Component{
  
  render(){
    const numbers = ["https://img2.akspic.ru/image/46291-dikaya_mestnost-ozero-pustynya-boloto-priroda-1920x1080.jpg",
  "https://s1.1zoom.ru/b5050/186/Norway_Mountains_Lake_488324_1920x1080.jpg",
  "http://wallpapers-images.ru/1920x1080/nature/wallpapers/nature-wallpapers-1920x1080-00014.jpg",
  "https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg",]
const listItems = numbers.map((numbers) =>
  <div  className="each-slide" style={{'backgroundImage':`url(${numbers })`}}></div>
);
    return(
      
      <Slide {...properties}>
    <div>{listItems}</div>
    </Slide>
    )
  }
}

export default Home

