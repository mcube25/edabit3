function dis(price, discount) {
	let final= +(price* (discount/100));
	return +((price - final).toFixed(2))
}
