
function range(start, end) {
  if (start === end) {
    return [end];
  } else {
    return [start] + range(start+1, end);
  }
}



function sumRec(arr) {
  if (arr.length <= 0) {
    return 0;
  } else {
    return arr[0] + sumRec(arr.slice(1));
  }
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else if (exp > 0) {
    return base * exponent(base, exp - 1);
  }
  else {
    return (1/base) * exponent(base, exp + 1);
  }
}

function exp(b, n) {
  if (n === 0) {
    return 1;
  }
  else if (n % 2 === 0) {
    return Math.pow(exp(b, n/2) ,2);
  }
  else {
    return b * Math.pow(exp(b, (n-1)/2),2);
  }
}


function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    let s = fibonacci(n-1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

function deepDup(arr) {
  // debugger
  let duparr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      duparr.push(deepDup(arr[i]));
    } else {
      duparr.push(arr[i]);
    }
  }
  return duparr;
}

function bsearch(arr, target) {
  if (arr.length <= 1) {
    return -1;
  }

  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] > target) {
    return bsearch(left, target);
  } else {
    return mid + bsearch(right, target);
  }
}


function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let mid = parseInt(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergesort(left), mergesort(right));
  }
}

function merge(left, right) {
  let sorted = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        sorted.push(left[0]);
        left = left.slice(1);
      } else {
        sorted.push(right[0]);
        right = right.slice(1);
      }
    }
    while (left.length) {
      sorted.push(left.shift());
    }
    while (right.length) {
      sorted.push(right.shift());
    }

    return sorted;
}
