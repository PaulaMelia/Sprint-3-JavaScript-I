

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
    
    

