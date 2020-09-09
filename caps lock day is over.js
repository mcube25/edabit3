function normalize(str) {
	if(str===str.toUpperCase()){
	return str[0]+str.slice(1).toLowerCase()+"!";	
	}
	else{return str;}	
}