function isPrefix(word, prefix) {
	if (word.startsWith(prefix.slice(0, 1))){return true}
	else{return false}
}

function isSuffix(word, suffix) {
	if (word.endsWith(suffix.slice(1))){return true}
	else{return false}
}