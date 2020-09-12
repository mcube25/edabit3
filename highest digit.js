function highestDigit(number) {
	let x= number.toString().split("")
	return Math.max(...x)
}