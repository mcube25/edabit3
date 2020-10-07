function indexShuffle(str) {
	let z = str.split("").filter((x,a)=>a%2==0).join("");
	let y = str.split("").filter((x,a)=>a%2==1).join("");
	return z+y
}