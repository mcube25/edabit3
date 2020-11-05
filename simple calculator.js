function calculator(num1, operator, num2) {

	let result=''
	for (let i = 0; i<operator.length; i++){
		switch(operator){
				case "+":
    result=num1+num2
    break;
  case "-" :
    result = num1-num2;
    break;
				 case "*" :
    result = num1*num2;
    break;
				 case "/" :
				if (num2==0){return "Can't divide by 0!" }
   else {result = num1/num2};
    break;
  default:
    text = "Looking forward to the Weekend";
		}
	}
	return result
}
