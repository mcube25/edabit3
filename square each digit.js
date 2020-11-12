function squareDigits(n) {
return 	+(n.toString().split("").map(x=>x**2).join(""));
}
function numberSplit(n) {
	return [Math.floor(n/2), Math.ceil(n/2)]
}
function spotlightSum(n) {
	let y = 8*n;
	return y + n
}
