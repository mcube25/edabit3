function arrayOfMultiples (num, length) {
return  Array.from({ length:length},
						(_, i) => num + (i * num));
}
