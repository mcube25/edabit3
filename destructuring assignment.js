let a, b, rest;
[a,b]= [10, 20];
console.log(a)
let a, b, rest;
[a,b,...rest]= [10, 20,45,88,99,00];
console.log(rest)let a, b, rest;
[{a,b,...rest}]= {a:10, b:20,c:45,d:88,e:99,f:00};
console.log(rest)
