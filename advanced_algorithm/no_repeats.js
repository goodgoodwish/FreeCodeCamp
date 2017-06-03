// No repeats please

function permAlone(str) {
  var myArr = [];

  function get_suffix(str, prefix) {
    var nextSuffix = "";
    for (var i = 0; i < str.length; i++) {
      if (prefix.indexOf(str[i]) === -1) {
        nextSuffix += str[i];
      }
    }
    return nextSuffix;
  }

  var permNext = function f_permNext(prefix, surffix, initStr) {
  	//call example:  permNext("","abc","abc");

    var newPrefix = "",
      newSurffix = "";
    var strLen = initStr.length;
    var i = 0;
    console.log("start func: " + prefix, i, surffix);

    if (prefix.length === strLen) {
      myArr.push(prefix);
      console.log("combined: " + prefix);
      return;
    }
    for (i = 0; i < surffix.length; i++) {
      newPrefix = prefix + surffix[i];
      newSurffix = get_suffix(initStr, newPrefix);
      console.log(newPrefix, i, newSurffix);
      permNext(newPrefix, newSurffix, initStr);
    }
    return myArr.length;
  };

  function idxToStr(idxStr, srcStr) {
    var lStr = "";
    lStr = idxStr.split("").map(function(val) {
    	return srcStr[val];
    }).join("");
  	return lStr;
  }

  var strIdx = Object.keys(str).join("");
  permNext("", strIdx, strIdx);
  console.log(myArr);
  //map idx to char, conver idx list back to string,
  myArr = myArr.filter(function (val) {
  	var charStr = idxToStr(val, str);
  	console.log("src: "+str+", encode: "+val+", decode: "+ charStr + ", match: "+charStr.match(/([a-z])\1+/g));
  	//find duplicate chars or strings, RegExp: "\1+",
  	return (charStr.match(/([a-z])\1+/g) === null);
  });
  console.log(myArr);
  return myArr.length;
}

permAlone('abc');

permAlone('aab');
