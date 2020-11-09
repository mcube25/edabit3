function numbersSum(arr) {
	let numbArr = arr.filter(x=> Number.isInteger(x))
	if(numbArr == 0){return }
	else {return numbArr.reduce((a,b)=> a+b);}
}
