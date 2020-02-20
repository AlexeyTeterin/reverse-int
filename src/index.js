module.exports = function reverse (n) {
  let numAsString = n.toString();
  let reversedString = '';
    for (let i = 0; i < numAsString.length; i++) {
        reversedString += numAsString.charAt(numAsString.length-i-1);
    }
    return parseInt(reversedString);
}
