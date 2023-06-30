import React, { useState } from 'react';
import AddToCartButton from '../components/AddToCartButton';


//declaring objects in array-products 
function ConstructionSite() {   
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 100.00 },
    { id: 2, title: 'Product 2', price: 200.00 },
    { id: 3, title: 'Product 3', price: 250.00 },
    { id: 4, title: 'Product 4', price: 250.00 },
  ]);


//this loop will read all elements/objects of array-"products"  
// use "$" to concatenate string to product.price
const renderProducts = () => {
  
  return products.map((product) => (
    <div key={product.id} className="product-item">
      <h4>{product.title}</h4>
      <p>Price: ${product.price}</p>
      <AddToCartButton product={product} handleQuantityChange={handleQuantityChange} addToCart={addToCart} />
    </div>
));

};

const [cart, setCart] = useState([]);

const handleQuantityChange = (productId, quantity) => {
const updatedCart = cart.map((item) => {
  if (item.productId === productId) {
    return { ...item, quantity: Number(quantity) };
  }
  return item;
});
setCart(updatedCart);
};

const addToCart = (product) => {
const itemInCart = cart.find((item) => item.productId === product.id);
if (itemInCart) {
  const updatedCart = cart.map((item) => {
    if (item.productId === product.id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  setCart(updatedCart);
} else {
  setCart([...cart, { productId: product.id, quantity: 1 }]);
}
};

const renderCartItems = () => {
return cart.map((item) => {
  const product = products.find((p) => p.id === item.productId);
  return (
    <div key={item.productId}>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
});
};

const calculateTotalPrice = () => {
let total = 0;
cart.forEach((item) => {
  const product = products.find((p) => p.id === item.productId);
  total += product.price * item.quantity;
    });
return total.toFixed(2);
  };

  
//below code will display   
  return (


    <div className='layout'>
      <h1>My Shop</h1>

      <h2>Products</h2>
      
      {renderProducts()}
      <h1>----------------</h1>
      <h2>Cart</h2>
       {renderCartItems()}
      <p>Total Price: ${calculateTotalPrice()}</p>


    </div>




  );
};
export default ConstructionSite;