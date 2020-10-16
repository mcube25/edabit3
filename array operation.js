function arrayOperation(x, y, n) {
	myArray = [];
	for(i = x; i <= y; i++){
		if(i % n === 0){
			myArray.push(i);
		}
	}
	return myArray;
	}