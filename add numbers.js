function operation(a, b, op) {
	let c = parseInt(a)
	let d = parseInt(b)
	let e = op=="add"?c+d
	:op=="subtract"?c-d
	:op=="multiply"?c*d
	:c/d

	return e==Infinity?"undefined":e

}
