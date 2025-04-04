/*Viết 1 hàm khởi tạo giỏ hàng `Cart` có đầu vào là userId, products(array) có các tính năng sau:
- Viết 1 phương thức tĩnh `calc()` cho cart giúp trả về tổng giá trị đơn hàng
- Viết phương thức tĩnh `checkout()` cho cart để xóa toàn bộ sản phẩm
*/

const products = [
  { id: 1, name: "tao", price: 100, quantity: 1 },
  { id: 2, name: "xoai", price: 150, quantity: 2 },
  { id: 3, name: "cam", price: 200, quantity: 3 },
];

function Cart(userId, products) {
  this.userId = userId;
  this.products = products;
}
// const Cart ={
//     calc : function(){
//         let total = 0;
//         for(let i = 0; i < this.products.length; i++){
//             total += this.products.price * this.products.quantity;
//         }
//         return total;
//     }
// }

const cartUser = new Cart("user", products);

console.log(cartUser.calc());
