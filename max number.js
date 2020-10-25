function maxPossible(n1, n2) {
	n2 = [... ''+n2].sort((a,b)=>b-a);
	return +([... ''+n1].map(v => v < n2[0] ? n2.shift() : v).join(''));

}
