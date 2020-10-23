function cardHide(card) {
	let y= card.slice(-4);
	let countNum = "";
	for (let i = (card.length)-4; i>0; i--){
		countNum+="*"
	}
	return countNum+y
}
