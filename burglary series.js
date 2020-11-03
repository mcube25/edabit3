function addName(obj, name, value) {
	let x = {[name]:value}
	return Object.assign(obj, x);
}
