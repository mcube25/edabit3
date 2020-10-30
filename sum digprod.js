function sumDigProd(...args) {
	a=args.reduce((x,y)=>x+y, 0);
	while(a>9){
		a=[...''+a].reduce((x,y) => x * +y, 1);
	}
	return a;
}
