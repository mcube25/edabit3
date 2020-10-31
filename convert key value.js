function objectToArray(obj) {
	let ans =[];
	for (let key in obj){
		let val = obj[key]
		ans.push([key].concat(val))
	}
	return ans;
}
