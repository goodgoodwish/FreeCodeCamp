//

function dupCnt(tabArray) {
// find duplicate elements/items in an array,
  return tabArray.reduce(function(obj, item) {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
    if (obj[item] === 2) obj.count++;
    return obj;
  }, { count: 0 }).count;
}

dupCnt("aabcc".split(""));

// Reference example, for each parameter description,
[0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  10
);

