Array.prototype.myFlat = function (depth = 1) {
  // helper
  function helper(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        res.push(...arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
    return res;
  }
  let res = [...this];
  for (let i = 0; i < depth; i++) {
    let preLen = res.length;
    res = helper(res);
    let nextLen = res.length;
    if (preLen == nextLen) break;
  }
  console.log(res);
  return res;
};
let arr = [1, 2, 4, [1, 2, 4, [1, 2]]];
