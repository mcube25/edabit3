function squareDigits(n) {
return 	+(n.toString().split("").map(x=>x**2).join(""));
}
