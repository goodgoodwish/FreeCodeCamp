// Permutations

function get_suffix_compare_char(str, prefix) {
	// get_suffix(initStr, newPrefix);
  var nextSuffix = "";
  for (var i = 0; i < str.length; i++) {
    if (prefix.indexOf(str[i]) === -1) {
      nextSuffix += str[i];
    }
  }
  return nextSuffix;
}

function get_suffix(surffix, charIdx) {
  var arr = surffix.split("");
  arr.splice(charIdx, 1);
  var newSurffix = arr.join("");
  return newSurffix;
}

var myArr = [];

var permNext = function f_permNext(prefix, surffix, initStr) {
  //call example:  permNext("","abc","abc");

  var newPrefix = "",
    newSurffix = "";
  var strLen = initStr.length;
  var i = 0;
  console.log("start func: " + prefix, i, surffix);

  if (prefix.length === strLen) {
    myArr.push(prefix);
    console.log("** Combined: " + prefix);
    return;
  }
  for (i = 0; i < surffix.length; i++) {
    newPrefix = prefix + surffix[i];
    newSurffix = get_suffix(surffix, i);
    console.log(newPrefix, i, newSurffix);
    permNext(newPrefix, newSurffix, initStr);
  }
  return myArr.length;
};

permNext("", "abc", "abc");


// options 2,  Introduce the a letter to the space.

function introChar(targetStr, chr) {
	var arr = [];
	var strArr = [];
	for (var i=0; i<=targetStr.length; i++) {
		strArr = targetStr.split("");
		strArr.splice(i, 0, chr);
		arr.push(strArr.join(""));
	}
	return arr;
}

introChar("abc", "1");

var myStr = "abc";
var pos = 1;
var nextChar = myStr[pos];

var permIntro = function f_intro (arr, chr) {
	console.log(pos, arr, myStr);
	var len = myStr.length;
	if (pos >= len || pos > 20) {
		return;
	}
	chr = myStr[pos];
	pos++;
	var plusCharArr=[];
	arr.forEach( function(str) {
		plusCharArr = introChar(str, chr);
		console.log(plusCharArr);
		f_intro (plusCharArr, chr)
	});
}

permIntro([myStr[0]], nextChar);

// Reference,  arr is reference type, the paramenter is a link,
// update in a function, update outside arr elements value too.

var yiArr = [7,8,9];

function cut1 (pArr) {
	lArr = pArr.slice();
	lArr.splice(1, 1);
	return lArr;
}

cut1(yiArr);

yiArr;
