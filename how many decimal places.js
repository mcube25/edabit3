function getDecimalPlaces(num) {
	return (num.split(".")[1]||[]).length
}