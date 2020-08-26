function sumOfCubes(nums) {
	if (nums.length == 0){return 0}
	else {return nums.map(x=>x**3).reduce((a,b)=> a+b) }		
}