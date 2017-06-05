// Permutations

// Option 1, fix prefix.

function get_suffix(surffix, charIdx) {
  var arr = surffix.split("");
  arr.splice(charIdx, 1);
  var newSurffix = arr.join("");
  return newSurffix;
}

function permSuffix (str) {
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
	};

	permNext("", str, str);
	return myArr.length;
}

permSuffix("123");


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

function permInsert (str) {
	var myArr = [];
	var permIntro = function f_intro (arr, pos, permStr) {
		console.log(pos, arr, permStr);
		var len = permStr.length;
		if (pos >= len) {
			myArr = myArr.concat(arr);
			console.log(arr);
			return;
		}
		if (arr.length === 0) {
			arr = introChar("", permStr[0]);
			pos++;
		}
		chr = permStr[pos];
		pos++;
		arr.forEach( function(val) {
			var plusCharArr = introChar(val, chr);
			console.log(plusCharArr);
			f_intro(plusCharArr, pos, permStr);
		});
	};
	permIntro([], 0, str);
	return myArr.length;
}

permInsert("abcde");

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
