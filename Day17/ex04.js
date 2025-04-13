const arr = [
	{ id: 1, fullname: "Nguyen Anh Huy", age: 32 },
	{ id: 2, fullname: "Nguyen Huy Hoang", age: 10 },
	{ id: 3, fullname: "Hoang Thanh Huy", age: 30 },
	{ id: 4, fullname: "Lê Đạt", age: 30 },
	{ id: 5, fullname: "Lê Duy Đạt", age: 30 },
	{ id: 6, fullname: "Huy Quốc", age: 30 },
];

function sortName (arr) {
    return arr.sort((a, b) => {
        let aFullName = a.fullname.split(" ");
        let bFullName = b.fullname.split(" ");
       if(aFullName[aFullName.length - 1] < bFullName[bFullName.length - 1]){
            return -1
        }
        else if(aFullName[aFullName.length - 1] === bFullName[bFullName.length - 1]){
            // let aLastName = aFullName.splice(0, aFullName[aFullName.length - 1]).join(" ")
            // console.log(aLastName)
        }
        else{
            return 1
        }
    })

}sortName(arr)