
import React from 'react';

import Imgs from './imgs';
import arr from "./imagesTypeObj";

const showImgs = () => {
	let table = [];
	for (var i = 0; i < arr.length; i++) {
		table.push(<Imgs src = {arr[i]} />);
	}
	return table;
}
//name= {arr[i].name} price= {arr[i].price} tesak = {arr[i].tesak}

export default showImgs;





