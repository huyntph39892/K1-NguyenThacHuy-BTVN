const arr1 = [1, 3, 5, 3, 4, -1];

const arr2 = arr1.sort((a, b) => a - b);
console.log(arr2);

const arr3 = [
    {id: 1, name: "product1", price: 200},
    {id: 2, name: "product2", price: 100},
    {id: 3, name: "product3", price: 150},
]

const arr4 = arr3.sort((a,b )=>a.price - b.price);
console.log(arr4);
const arr5 = arr3.sort((a,b )=>b.price - a.price);
console.log(arr5);
// console.log(arr5[0].name);

const users = [
    {id: 1,name: "huy", email: "huy@gmail.com", age: 21},
    {id: 2,name: "nam", email: "nam@gmail.com", age: 27},
    {id: 3,name: "tung", email: "tung@gmail.com", age: 21},
    {id: 4,name: "ngan", email: "ngan@gmail.com", age: 18},
    {id: 5,name: "ha", email: "ha@gmail.com", age: 21},
]

function sortUsers(users){
    const usersCopy = structuredClone(users);

    usersCopy .sort((a, b)=>{
        if(a.name < b.name) return -1;
        else return 1;
    })
    return usersCopy;

}
const sortedUsers = sortUsers(users);
console.log(sortedUsers);
