var myArray = [ 5, 7,
  [ 4, [2], 8, [1,3], 2],
  [ 9, []],
  1, 8
]

var sum = 0;

function treesum(n) {
  for (var i = 0; i < n.length; i++) {
    if (Array.isArray(n[i])) {
    treesum(n[i]);
    } else {
      console.log("i = " + n[i]);
      sum+= Number(n[i]);
      console.log("sum = " + sum);
    }
  }
}

treesum(myArray);

alert(sum);
