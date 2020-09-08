regex1=/#/gi
regex2=/\+/gi
newarr1= str1.match(regex1).length
newarr2= str.match(regex1).length
return [newarr1, newarr2] 
function hashPlusCount(str) {
    regex1=/#/gi
regex2=str.split("#").filter(x=>x=="+");
newarr1= str.match(regex1).length
newarr2= regex2.length
if (str == ""){return [0,0]}
else{return [newarr1, newarr2]}

}
const hashPlusCount = str => [
    (str.match(/#/g) || []).length,
    (str.match(/\+/g) || []).length,
  ];