const arr = [
	{ id: 1, fullname: "Nguyen Quang Huy", age: 32 },
	{ id: 2, fullname: "Nguyen Huy Hoang", age: 10 },
	{ id: 3, fullname: "Hoang Thanh Huy", age: 30 },
];
//viet ham tim tem ko can tem dem
//input : Huy, output : [{id:1, name: "Nguyen Quang Huy", age: 32}, {id:3, name: "Hoang Thanh Huy", age: 30}]
function searchName(arr, fullname){
    const result1 = []
    const result = arr.filter((item)=> {
        let arrOfName = item.fullname.split(" ")
        let firstName = arrOfName[arrOfName.length - 1]
        // console.log(firstName)
        if(firstName === fullname){
            result1.push(item)
            return item
        }
        return false
        // return firstName === fullname
    })
    return result
}
console.log(searchName(arr, "Huy"))
console.log(searchName(arr, "Hoang"))