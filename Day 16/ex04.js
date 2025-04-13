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

function removeAnimals(arr1) {
  return arr1.reduce((acc, cur) => {
    if (acc.findIndex((item) => item === cur) === -1) {
      acc.push(cur);
    }
    // else if(acc[cur]){
    //     acc[cur]+=1
    // }
    // else{
    //     acc[cur] = 1
    // }
    return acc;
  }, []);
}
console.log(removeAnimals(animals));
