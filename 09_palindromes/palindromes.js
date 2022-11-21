const palindromes = function (s) {
    let stripped = s.replace(/[^\w\s\']|_/g, "")
                    .replace(/\s+/g, "");
    stripped = stripped.toLowerCase();
    return stripped == stripped.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
