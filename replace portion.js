function joinPath(portion1, portion2) {
let x = portion1.includes("/")?portion1.replace("/",""):portion1;
	let y = portion2.includes("/")?portion2.replace("/",""):portion2;
	return x +"/"+y
}
