function checkSum(arr, n) {

	return arr.some(a=>arr.includes(n-a))?true:false;
}
