function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++){
    arr2.push(arr[i][j]);
  }
	}
  return arr2;
}
