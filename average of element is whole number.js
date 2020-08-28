function isAvgWhole(arr) {
	if (arr.reduce((a, b)=>a+b)%arr.length==0){return true}
	else{return false}
}