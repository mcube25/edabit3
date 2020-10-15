function zipIt(women, men) {
	if (women.length !== men.length){return  "sizes don't match"}
	else {return women.map((x, i)=>[x,men[i] ])}
}