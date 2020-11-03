function removeABC(str) {
	if (str.match(/[abc]/g)){return str.replace(/[abc]/g,"")}
	else {return null}
}
