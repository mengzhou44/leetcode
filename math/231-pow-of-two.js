function isPowerOfTwo(n) {
    if (n < 1) return false

    if (n === 1) return true

    while (n > 1) {
        if (n % 2 !== 0) return false

        n = n / 2
    }

    return true
}

function isPowerOfTwo(n) {
    if (n === 1 || n === 2) return true
    let value = 2
    while (value < n) {
        value = value * 2
    }
    return value === n
}

function isPowerOfTwo(n) {
    if (n<=0) return false
    while(n>0) {
         if (n=== 1)  return true 
         if (n%2 ===1)  return false 
         n = n/2 
    }
    
    return true 
}
