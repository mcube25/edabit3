const findUnsortedSubarray = nums => {
	if (nums[0]== Math.min(...nums)) return findUnsortedSubarray(nums.slice(1))
	if (nums[nums.length-1]== Math.max(...nums)) return findUnsortedSubarray(nums.slice(0,-1))
	return nums.length
};