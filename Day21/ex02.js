/**
 * 1. getElwementById() //elemntent/null
 * 2. getElementByTagName() //HTMLCollection
 * 3. getElementByName() 
 * 4. getElementByClassName() //HTMLCollection
 * 5. querySelector() //phan tu HTML dau tien thoa man selector
 * 6. querySelectorAll() //NodeList
 * 
 * Live List >< Static List
 */

// console.log(document.getElementById("list-languages"))
// console.log(document.getElementsByTagName("ol")[0])
// console.log(document.getElementsByClassName("languages")[0])
// console.log(document.querySelector("ol.languages"))
// console.log(document.querySelectorAll("ol.languages"))

const olElement = document.getElementsByClassName("languages")[0]
console.log(olElement.children)

for (let i = 0; i < olElement.children.length; i++) {
    console.log(olElement.children[i])
}

console.log(Array.isArray(olElement.children)) 
console.log(olElement.children)

const olElemnets = {
    0: "JavaScript",
    1: "Python",
    2: "Java",
    3: "C++",
    length: 4,
}