function indexMultiplier(arr) {
	if (arr.length == 0){return 0}
	else {return arr.reduce((s, n, i) => s + (n * i), 0)}
}
