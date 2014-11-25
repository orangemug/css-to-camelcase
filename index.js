module.exports = function(str) {
  var foundFirstLetter;
  var out = "";
  for(var i=0; i<str.length; i++) {
    if(str[i] === "-") {
      if(foundFirstLetter) {
        out += str[i+1].toUpperCase();
        i += 1;
      }
    } else {
      foundFirstLetter = true;
      out += str[i];
    }
  }
  return out;
}
