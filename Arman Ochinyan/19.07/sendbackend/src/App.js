
import React from 'react';

import Imgs from './imgs';
import arr from "./imagesTypeObj";

class ShowImgs extends React.Component {

  	   
	render(){
		
		return (
			<>
				<Imgs src = {arr[0].img} name="Դրամապանակ" price="8000" tesak="Բնական կաշի" /> 
				<Imgs src = {arr[1].img} name="Պայուսակ" price="5000" tesak="Կաշի" /> 
				<Imgs src = {arr[2].img} name="Գոտի" price="8000" tesak="Բնական կաշի" />
				<Imgs src = {arr[3].img} name="Պիջակ" price="20000" tesak="Կաշի" /> 
				<Imgs src = {arr[4].img} name="Տղամարդու Կոշիկ" price="6000" tesak="Բնական կաշի" /> 
				<Imgs src = {arr[5].img} name="Կոշիկ" price="16000" tesak="Կաշի" />
			</>
		)
	}
}

export default ShowImgs;





