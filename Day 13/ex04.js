const arr1 = [1,2,6,8,11,3,5];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if(pivot > arr[i]) {
        left.push(arr[i]);
    }
    else{
        right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];  
}

console.log(quickSort(arr1)); 

