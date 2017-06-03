// No repeats please

function permAlone(str) {
  var myArr = [];
  var cnt = 0;
  var strLen = str.length;

  function get_suffix(str, prefix) {
    var nextSuffix = "";
    for (var i = 0; i < str.length; i++) {
      if (prefix.indexOf(str[i]) === -1) {
        nextSuffix += str[i];
      }
    }
    return nextSuffix;
  }

  var permNext = function f_permNext(prefix, surffix) {
    var newPrefix = "",
      newSurffix = "";
    var i = 0;
    console.log("start func: " + prefix, i, surffix);

    if (prefix.length === strLen) {
      myArr.push(prefix);
      console.log("last str: " + prefix);
      return;
    }
    for (i = 0; i < surffix.length; i++) {
      newPrefix = prefix + surffix[i];
      newSurffix = get_suffix(strIdx, newPrefix);
      console.log(newPrefix, i, newSurffix);
      permNext(newPrefix, newSurffix);
    }
  };

  function idxToStr(idxStr, srcStr) {
    var lStr = "";
    lStr = idxStr.split("").map(function(val) {
    	return srcStr[val];
    }).join("");
  	return lStr;
  }

  strIdx = Object.keys(str).join("");
  permNext("", strIdx);
  console.log(myArr);
  //map idx to char, conver idx list back to string,
  myArr = myArr.filter(function (val) {
  	var charStr = idxToStr(val, str);
  	console.log(charStr, str);
  	return (charStr.match(/([a-z])\1+/g) === null);
  });
  console.log(myArr);
  return myArr.length;
}

permAlone('abc');

permAlone('aab');
