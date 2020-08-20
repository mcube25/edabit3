function factorial(z) {
    if (z === 0 || z === 1) return 1;
  
    let total = 1;
  
    for (let i = z; i >= 1; i--) {
      total *= i;
    }
  
    return total;
  }