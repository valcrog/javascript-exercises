const fibonacci = function(n) {
    n = parseInt(n);
    if (n <= 0) {
        return "OOPS"
    }
    else if (n == 1) {
        return 1
    } else {
        let n1 = 0;
        let n2 = 1;
        let nextTerm;
        for (let i = 1; i < n; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        return nextTerm
    }
};

// Do not edit below this line
module.exports = fibonacci;
