function toArray(num) {
	if (num<0){return}
	else{	return num.toString().split("").map(Number)}

}

function toNumber(arr) {
	return +arr.join("")
}