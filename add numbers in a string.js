function addNums(nums) {
	var x = nums.split(",") 
	if (x.length == 1){return Number(x)}
	else { 	return (x.reduce((a,b)=>parseInt(a)+parseInt(b)))}
}