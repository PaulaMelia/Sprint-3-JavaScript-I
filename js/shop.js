

// Array con productos (objetos) añadidos directamente con push(). Los productos de esta matriz se repiten.
var cartList = [];

// Versión mejorada de cartList. El carrito es una array de productos (objetos), pero cada uno tiene un campo de cantidad para definir su cantidad, por lo que estos productos no se repiten.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Vaya a  productos para obtener el artículo para agregar al carrito
    // 2. Agregue el producto encontrado a la array cartList

    for (let i = 0; i < products.length; i++)//para que recorra products {
        
        //condicion
        if (products[i].id == id) {
          cartList.push(products[i]);
          console.log(cartList);
        }
      }  
    
    
// Exercise 2
function cleanCart(id) {
    /*for(let i=0;i<cartList.length;i++){
        if(cartList[i].id==id){
            cartList.splice(i,1);
            console.log('Item removed from cart:', id);
            break;
        }*/
        cart.length = 0;
        cartList.length = 0;
        console.log(cartList);
          document.getElementById("total_price").innerHTML = 0;
          document.getElementById("cart_list").innerHTML = "";
          document.getElementById("count_product").innerHTML = 0;
          alert('Your shopping cart is clean');
    }



// Exercise 3
function calculateTotal() {
    // Calcule el precio total del carrito usando la array "cartList"
    total=0
    for(let i=0;i<cartList.length;i++){
        total+=cartList[i].price;
    }
    console.log(total);
    return total;
}

// Exercise 4
function generateCart() {
    // Usando la array "cartlist" que contiene todos los artículos en el carrito de compras,
    // Genere la array "carrito" que no contiene artículos repetidos, sino que cada artículo de esta matriz "carrito" muestra la cantidad de producto.
    cartList.forEach((item) =>{
        let newItem = cart.find((it) => it.id === item.id);
        if(newItem){
          newItem.quantity +=1;
        } else {
          newItem ={...item, quantity: 1, subtotal:0, subtotalWithDiscount: 0};
          cart.push(newItem);
        }
       });
       applyPromotionsCart()
       console.log(cart);


}

// Exercise 5
function applyPromotionsCart() {
    // Aplicar promociones a cada artículo de la matriz "carrito"
    for (let i = 0; i < cart.length; i++){
        if(cart[i].id === 1 && cart[i].quantity >= 3){
          let priceDiscount = 10;
          cart[i].subtotalWithDiscount = priceDiscount * cart[i].quantity;
        } else if (cart[i].id === 3 && cart[i].quantity >= 10){
          let priceDiscount3 = (cart[i].price / 3) * 2;
          cart[i].subtotalWithDiscount = priceDiscount3.toFixed(2) * cart[i].quantity;
        } else{
            cart[i].subtotalWithDiscount = cart[i].subtotal;
        }
      }
    }

    // Exercise 6
function printCart() {
    // Llene el modal del carrito de compras manipulando el dom del carrito de compras
    let total = 0;
    document.getElementById("cart_list").innerHTML = "";
    for(let i=0; i<cart.length; i++){
        let name = cart[i].name;
        let price = cart[i].price;
        let quantity = cart[i].quantity;
        let totalWithDiscount = cart[i].subtotalWithDiscount;
        document.getElementById("cart_list").innerHTML += `<tr>
        <th scope="row">${name}</th>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>${totalWithDiscount}</td>
        </tr>`
        total += totalWithDiscount;
        document.getElementById("total_price").innerHTML = total;
        }

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}

