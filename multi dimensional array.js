var salary =[
  ["QE", 22, 1800],
  ["RE", 23, 45],
  ["rty",34, 765]
];
let result=[]
for (var i = 0; i<salary.length; i++) {

    // This loop is for inner-arrays
    for (var j = 0; i<salary[i].length; j++) {

        // Accessing each elements of inner-array
        result.push( salary[i][j] );
    }
}

//solution
function checkEquals(arr1, arr2) {
	if (arr1.join("") == arr2.join("")) {
  	return true
  } else {
  	return false
  }
}
