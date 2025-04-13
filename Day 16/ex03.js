// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((a, b, c, d) => {
//     console.table({a, b, c, d})
// });
/**
 * reduce((acc, cur, index, arr)=>{},
 * <initialValue>)
 *
 * acc(accumulator) -> bien tich luy
 * cur (current value) -> phan tu dc duyet hien tai
 * index -> index cua phan tu dc duyet
 * arr -> array ban dau
 */

const arrNumber = [1, 2, 3, 4, 5, 6, 7];
function factorial(arr) {
  const intergrate = arr.reduce((acc, cur, index, array) => {
    return acc * cur;
  });
  console.log(intergrate);
}
factorial(arrNumber);

const arrNumber2 = [1, 2, 3, 4];
let result = arrNumber2.reduce((acc, cur) => {
  return acc + cur;
});
console.log(result);

const animals = [
  "dog",
  "cat",
  "python",
  "dog",
  "cat",
  "python",
  "dog",
  "cat",
  "virus",
  "dom",
];

function coutnAnimals(arr1){
    return arr1.reduce((acc, cur)=>{
        if(acc[cur]){
           acc[cur]+=1
        }
        else{
           acc[cur] = 1  
        }
        return acc
    },{})
}
console.log(coutnAnimals(animals))