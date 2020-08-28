function bomb(str) {
	if (str.match(/bomb/gi)){return "Duck!!!" }
	else{return "There is no bomb, relax."}
}