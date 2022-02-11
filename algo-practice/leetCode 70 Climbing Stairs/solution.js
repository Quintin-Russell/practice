/**
 * @param {number} n
 * @return {number}
 */

// combinations using recursion

  var climbStairs = function (n) {
    var res = Array(n + 1).fill(0);
    var temp = 0;
    var m = 2;
    res[0] = 1;

    for (var i = 1; i <= n; i++) {
      var s = i - m - 1;
      var e = i - 1;
      if (s >= 0) {
        temp -= res[s];
      }
      temp += res[e];
      res[i] = temp;
    }
    return res[n];
  };
