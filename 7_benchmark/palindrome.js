function isPalin(str) {
    var half = Math.round(str.length / 2);
    var start = 0;
    var end = str.length - 1;
    var palindrome = true;
    var SPACE = 32;
    var COMMA = 44;
    var startSpace, endSpace;
  
    while (half && palindrome) {
      startSpace = str.charCodeAt(start) === SPACE || str.charCodeAt(start) === COMMA;
      endSpace = str.charCodeAt(end) === SPACE ||  str.charCodeAt(end) === COMMA;
  
      if (str[start] == str[end]) {
        start++;
        end--;
      } else if (startSpace || endSpace) {
        startSpace && start++;
        endSpace && end--;
      } else {
        palindrome = false;
      }
  
      half--;
    }
  
    return palindrome;
  }