
Array.prototype.uniq = function () {
  let uniq_arr = [];
  for (var i = 0; i < this.length; i++) {
    if (uniq_arr.includes(this[i])) {
      continue;
    } else {
      uniq_arr.push(this[i]);
    }

  }
return uniq_arr;
};

Array.prototype.twoSum = function () {
  let pairs = [];
  for (var i = 0; i < this.length-1; i++) {
    for (var j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i,j]);

      }
    }
  }
  return pairs;
};


Array.prototype.transpose = function () {
  let newarr = [];
  for (var i = 0; i < this.length; i++) {
    let row = this[i];
    var new_row = [];
    for (var j = 0; j < row.length; j++) {
      new_row.push(this[j][i]);
    }
    newarr.push(new_row);
  }
  return newarr;
};
