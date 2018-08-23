const cb = function (el) {
  console.log(el+1);
};

Array.prototype.myEach = function (callback) {
  // debugger
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};

Array.prototype.myMap = function (callback) {
  let arr = [];

  arr.push(this.myEach(callback));
  return arr;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let acc;
  let i = 0;
  if (initialValue) {
     acc = initialValue;
  } else {
     acc = this[0];
     i++;
  }
  while (i < this.length) {
    acc = callback(acc, this[i]);
    i++;
  }
  return acc;
};

const cb2 = function (acc, el) {
  return acc + el;
};
