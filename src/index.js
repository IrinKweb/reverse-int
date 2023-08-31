module.exports = function reverse (n) {
    let reverseNum = parseInt(n.toString().split('').reverse().join(''));
    return (n < 0) ? reverseNum : reverseNum;
}
