function fibonacci(n,memo) {
    memo = memo || {}
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 1) {
        return 1
    }
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
}
const mauriceWins=(mS, sS)=> mS[1]>sS[0] && mS[2]>sS[1]