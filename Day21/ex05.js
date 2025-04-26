// /**
//  * Attribute
//  */

// const h2Element = document.getElementsByTagName("h2")[0]
// // h2Element.style.backgroundColor = "red"
// // h2Element.style.color = "black"
// console.log(Object.values(h2Element.style).length)

// h2Element.style.cssText = `
// padding: 15px;
// margin: 30px;
// border-radius: 8px;
// background-color: red;
// `

const data = [
	{ id: 1, name: "iphone 16 pro max", price: 2000 },
	{ id: 2, name: "Xiaomi red mi note 12", price: 800 },
	{ id: 3, name: "Samsung S22 Ultra", price: 1400 },
];
// * đưa danh sách sản phẩm ra màn hình, sản phẩm nào có giá cao nhất thì tô đỏ thông tin của sản phẩm đó.
// */
const productList = document.getElementById("product-list");
const maxPrice = Math.max(...data.map((item) => item.price));
data.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.innerText = `${item.name} - ${item.price}`;
    if (item.price === maxPrice) {
        liElement.style.color = "red";
    }
    document.body.appendChild(liElement);
});
