function pairwise(arr, arg) {
  var idxArr = [];
  var startNum = 0;
  var sum = 0;

  for(var i=0; i<arr.length-1; i++) {
    startNum = arr[i];
    arr.forEach(function(val, currentIndex) {
      if (startNum + val === arg && currentIndex > i  && idxArr.indexOf(currentIndex) === -1 && idxArr.indexOf(i) === -1) {
        idxArr.push(i);
        idxArr.push(currentIndex);
      }
    });

  }
  sum = idxArr.reduce(function (accu, curr) {
    return accu + curr;
  }, 0);
  console.log(idxArr);
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
