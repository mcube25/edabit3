//template literals
let a = 5;
let b = 89;
console.log(`fifteen is ${a+b} and not ${2*a+b}.`)



function generation(x, y) {

let ancestor = {
"-3"	: {m:"great grandfather", f:"great grandmother"},
	"-2"	: {m:"grandfather", f:"grandmother"},
	"-1"	: {m:"father", f:"mother"},
	0	: {m:"me!", f:"me!"},
	1	: {m:"son", f:"daughter"},
	2	: {m:"grandson", f:"granddaughter"},
	3: {m:"great grandson", f:"great granddaughter"}
}
return ancestor[x][y]	;

}
