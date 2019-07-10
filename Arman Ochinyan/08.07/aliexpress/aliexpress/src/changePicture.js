const change = () => {
	let next = 1;
	return function (arr) {
		
		if(next >= arr.length){
			next = 0;
		}
		return arr[next++];
	}

}
export default change();