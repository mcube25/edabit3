function asciiCapitalize(s){
    return s.split('')
     .map(c => c.charCodeAt() % 2 === 0 ? c.toUpperCase() : c.toLowerCase())
     .join('')
 }