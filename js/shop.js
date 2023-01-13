

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



