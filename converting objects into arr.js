function toArray(obj) {
	if (obj.length==0){return []}
	else {return Object.entries(obj);}
}

const REGEXP = /\S\?$/gi
