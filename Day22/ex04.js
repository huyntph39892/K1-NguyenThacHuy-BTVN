const h1Element = document.getElementsByTagName("h1")[0]

console.log(h1Element.className)
// h1Element.className = "newClass"
// console.log(h1Element.className)

console.log(h1Element.className.split(" "))
console.log(h1Element.classList)

h1Element.className.replace('title-1', "title-01")
console.log(h1Element.classList)