function happinessNumber(s) {
	let a = (s.match(/:\)/g)||[]).length;
	let b = (s.match(/\(:/g)||[]).length;
	let c = (s.match(/:\(/g)||[]).length;
	let d = (s.match(/\):/g)||[]).length;
	return a + b - c - d;
}