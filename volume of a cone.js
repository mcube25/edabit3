function coneVolume(h, r) {
	let volume = (Math.PI * r**2 * h)/3;
	return +(volume.toFixed(2))
}
function totalVolume(...boxes) {
	return boxes.reduce((a,[l,w,h])=>a+l*w*h, 0)
}
