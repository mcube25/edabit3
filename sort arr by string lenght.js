function sortByLength(arr) {
	if (arr.length==0){return []}
	else {return arr.sort((a,b)=>a.length - b.length) }
}