

function memo(arg) {
    if (!memo.cache) {
        memo.cache = {}

    }
    if (!memo.cache[arg]) {
      let result={};
      result = arg;
        return memo.cache[arg] = result

    }
    return memo.cache[arg]
}

//2
