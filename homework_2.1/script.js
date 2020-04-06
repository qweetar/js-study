var myArray = [ 5, 7,
  [ 4, [2], 8, [1,3], 2],
  [ 9, []],
  1, 8
];



function treesum(n) {
  var sum = 0;
  for (var i = 0; i < n.length; i++) {
    if (Array.isArray(n[i])) {
      sum+= treesum(n[i]);
    } else {
      console.log("i = " + n[i]);
      sum+= Number(n[i]);
      console.log("sum = " + sum);
    }
  }
  return sum;
}

alert(treesum(myArray));
