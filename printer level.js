function inkLevels(inks) {
	let x = Object.values(inks)
	let y = x.sort((a, b)=>a-b);
if(y[0]==0){return 0}
	else{return Math.min(...y)}	
}