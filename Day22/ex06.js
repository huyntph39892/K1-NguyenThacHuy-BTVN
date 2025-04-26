/**
 * Event
 * Các cách gắn sự kiện
 * 1. Gắn lời gọi hàm vào attribute của thẻ html
 * 2. Dùng JS để gắn
 * 3. Dùng eventListener(có thể gắn nhiều hàm lắng nghe sự kiện cho cùng 1 phần tử)
 */
// const btnElement = document.getElementById("btn")
// console.log({btn})

// btnElement.onclick = function(){
//     console.log("xin chao")
// }
// btnElement.addEventListener("click", function(){
//     console.log("bongjour")
// })
// btnElement.addEventListener("click", function(){
//     console.log("konichiwa")
// })

const inputElement = document.getElementsByName("email")[0]
console.log(inputElement)
inputElement.onchange = function () {
    console.log(event.target)
    console.log("onchange")
}

inputElement.oninput = function () {
    console.log(event.target.value)
    // console.log("oninput")
}