function repetition(txt, n) {
	return txt.repeat(n)
}
//or
function repetition(txt, n) {
    if (n == 1) {
        return txt;
    }
       
       return txt + repetition(txt, n - 1)
       
       
   }