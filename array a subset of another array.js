function isSubset(arr1, arr2) {
	if ( arr1.every(e => arr2.includes(e))){return true}
	else {return false}
}