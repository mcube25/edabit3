function totalDistance(height, length, tower) {
	let dist = tower/height;
	let y = Number(length*dist+tower).toFixed(1);
	return +y;
}
