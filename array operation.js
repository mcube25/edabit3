function arrayOperation(x, y, n) {
	myArray = [];
	for(i = x; i <= y; i++){
		if(i % n === 0){
			myArray.push(i);
		}
	}
	return myArray;
	}
	function arrayOperation(x, y, n) {
		var r = [];
	  for (var i = x; i <= y; i++) {
			if (i % n == 0) r.push(i);
		}
	  return r;
	}