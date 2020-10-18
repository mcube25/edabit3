function count(n) {
	let arr = n.toString();
	if (arr.includes("-")){return arr.length-1}
	else{return arr.length}
}