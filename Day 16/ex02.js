const arr = [1, 5, -1, "hoang", null, NaN, "", , , 100];

// function filterArray(arr){
//     const arrCopy = structuredClone(arr);
//     arrCopy.sort((a,b)=>{
//         if(a < b) return -1;
//         else return 1;
//     })
//     return arrCopy

// }
// const sortedArr = filterArray(arr);
// console.log(sortedArr);

function mixArr(arr) {
  const arrCopy = arr.flat(1);
  //   console.log(arrCopy);
  const stringArr = [];
  const numberArr = [];
  const falsyValues = [];
  arrCopy.forEach((element) => {
    if (!element) {
      falsyValues.push(element);
    } else if (typeof element === "string" && element !== "") {
      stringArr.push(element);
    } else if (typeof element === "number") {
      numberArr.push(element);
    }
  });
  return [
    ...numberArr.sort((a, b) => a - b),
    ...stringArr.sort(),
    ...falsyValues,
  ];
}
console.log(mixArr(arr));
