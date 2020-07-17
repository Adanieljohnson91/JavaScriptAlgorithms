var xorOperation = function(n, start) {
    var res = start
    for (let i = 1; i < n; i++) {
        start = start + 2
        res = res ^ start
    }
    return res
};