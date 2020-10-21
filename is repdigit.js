function isRepdigit(num) {
	return String(num).split('').every((x, i, arr) => x=== arr[0])
}