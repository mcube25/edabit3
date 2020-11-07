function calculateLosses(obj) {
	let number =  Object.values(obj);
	if (number == 0 ){return "Lucky you!"}
	else {return number.reduce((a,b)=> a+b)}

}
