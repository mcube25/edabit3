function isTriplet(n1, n2, n3) {
	let result;
let arr = [n1, n2, n3];
	let newArr = arr.sort((a,b)=>a-b);
	for (let i=0; i< newArr.length; i++){
		result = (arr[0])**2 + (arr[1])**2 == (arr[2])**2
	}
	return result
}
