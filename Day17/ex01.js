let myName = "huy";

console.log(myName.charAt(0))

console.log(myName[0])
console.log(myName)
myName[0] = "H" 
for(let i = 0; i< myName.length; i++){
    console.log(myName[i])
}

let age = 21;
console.log(age.toString()) 
console.log(age + "")

//bien doi chuoi thanh so

let school = "FPT polytechnic";
console.log(school.toUpperCase())
console.log(school.toLowerCase())
console.log(school)

//cat chuoi 
/**
 * *slice(): ho tro chi so am, tao ra chuoi con dc cat tu chuoi go, neu ko cat dc thi tra ve chuoi rong
 * *substring(): ko ho tro chi so am, cat tu vi tri bat dau den vi tri ket thuc, neu ko cat dc thi tra ve chuoi rong
 */
console.log(school.slice(0, 3)) 
console.log(school.slice(4))
console.log(school.substring(0, 3))
console.log(school.substring(4))

//chuyen doi chuoi thanh mang
console.log(school.split(" "))
