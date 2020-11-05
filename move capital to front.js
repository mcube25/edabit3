function capToFront(s) {
	let leftArray = [...s].filter(x=>x==x.toUpperCase());
	let rightArray = [...s].filter(x=>x==x.toLowerCase());
	return [...leftArray, ...rightArray].join("")
}
