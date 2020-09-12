function isSymmetrical(num) {
	if (num == num.toString().split("").reverse().join("")){return true}
	else{return false}
}