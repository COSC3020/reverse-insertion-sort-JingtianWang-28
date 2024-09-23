function insertionSortReverse(arr) {
    for (var i = arr.length - 2; i >= 0; i--) { //start at last-1
      var val = arr[i];
      var j;
      for (j = i; j < arr.length - 1 && arr[j + 1] < val; j++) { //move left when ele greater than val
        arr[j] = arr[j + 1];
      }
      arr[j] = val;
    }
    return arr;
  }
