function charIndex(word, char) {
	let x = word.indexOf(char);
	let y = word.lastIndexOf(char);
	if (word.indexOf(char)== -1){return undefined}
	else {return[x,y]}
	
}