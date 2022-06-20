function Algo() {}

Algo.prototype.reverse = function(str = '') {
  // TODO: Your code here
  return  [...str].reverse().join("");
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  if (!str) {
    return false;
  }
  return (
    str.replace(/\s+/g, "") === this.reverse(str.replace(/\s+/g, ""))
  );
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  if (str) {
    return str
  .toLowerCase()
  .split(' ')
  .map((word) => {
    const [firstLetter, ...rest] = word;
    return [firstLetter.toUpperCase(), ...rest].join('');
  }).join(' ');
}
return str;
};

module.exports = Algo;
