Array.prototype.bubbleSort = function () {
  let sorted = false;
  while (sorted == false){
  sorted = true;
  for (var i = 0; i < this.length-1; i++) {
    if (this[i] > this[i+1]) {
      let temp = this[i];
      this[i] = this[i+1];
      this[i+1] = temp;
      sorted = false;
    }
  }
}
return this;
};

String.prototype.subStrings = function () {
  let arr = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = i; j < this.length; j++) {
      arr.push(this.slice(i,j+1));
    }
  }
  return arr;
};
