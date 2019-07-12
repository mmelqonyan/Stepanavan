
import React from 'react';

import Imgs from './imgs';
import arr from "./imagesTypeObj";

const showImgs = () => {
	let table = [];
	
	table = arr.map((item,index) => {
		return (<Imgs key={item.id} src = {item.img} id={item.id} /> )
	});
	
	return table;
}

export default showImgs;





