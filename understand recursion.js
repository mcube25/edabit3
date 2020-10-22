function fibonaci(n, str){
  let fib = [];
  let n = 2
  for (i = n; i <= str.length; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:

    fib[i] = fib[i - 2] + fib[i - 1];

  }
}
//solution
function fibStr(n, str) {
  for (let i = 0; i < n - 2; i++) str.push(str[str.length - 1] + str[str.length - 2]);
  return str.join(", ");
}
