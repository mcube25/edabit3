function tempConversion(celsius) {
	let f = +(celsius*(9/5) +32 ).toFixed(2);
	let k = +(celsius + 273.15).toFixed(2);
	if (k<0  ){return "Invalid"}
else	{return [f, k]}
}



//Special Arrays
function isSpecialArray(arr) {
	for (let i=0; i<arr.length; i++){
		if (arr.every((e, i)=>e%2==i%2)){return true}
		else{return false}
	}
}
