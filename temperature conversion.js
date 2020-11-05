function tempConversion(celsius) {
	let f = +(celsius*(9/5) +32 ).toFixed(2);
	let k = +(celsius + 273.15).toFixed(2);
	if (k<0  ){return "Invalid"}
else	{return [f, k]}
}
