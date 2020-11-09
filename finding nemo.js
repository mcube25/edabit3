function findNemo(sentence) {
	let str= sentence.split(" ");
	let result = str.findIndex(e=>e==="Nemo")+ 1;
	if (result == 0){ return "I can't find Nemo :("}
	else {return  "I found Nemo at "+result + "!"}
}
