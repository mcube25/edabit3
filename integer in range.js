function intWithinBounds(n, lower, upper) {

	if (!Number.isInteger(n)){return false}
	return n >=lower && n  != upper && n<=upper

}
