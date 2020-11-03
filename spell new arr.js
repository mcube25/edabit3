function spelling(str){
let nrA = []
 for (let i=1; i<=str.length; i++){
 nrA.push(str.slice(0, i))
 }
 return nrA
}
//concatinate variables
function concat(...args) {
	return args.flat()
}
