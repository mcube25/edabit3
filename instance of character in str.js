function charCount(myChar, str) {
	return str.split("").filter(x=>x==myChar).length;
}