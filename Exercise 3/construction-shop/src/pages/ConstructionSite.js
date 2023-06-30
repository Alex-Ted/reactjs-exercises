import React, { useState } from "react";
import AddToCartButton from "../components/AddToCartButton";

import product1Image from "../assets/nissanGTR.jpg";
import product2Image from "../assets/porsche.png";
import product3Image from "../assets/toyota-ae86.jpg";
import product4Image from "../assets/jeepney.jpg";

//declaring objects in array-products
function ConstructionSite() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Nissan GTR",
      price: 100.0,
      quantity: 0,
      image: product1Image,
    },
    {
      id: 2,
      title: "Porsche 911",
      price: 200.0,
      quantity: 0,
      image: product2Image,
    },
    {
      id: 3,
      title: "Toyota Trueno AE86",
      price: 250.0,
      quantity: 0,
      image: product3Image,
    },
    {
      id: 4,
      title: "Philippine Jeepney",
      price: 250.0,
      quantity: 0,
      image: product4Image,
    },
  ]);

  //this loop will read all elements/objects of array-"products"
  // use "$" to concatenate string to product.price
  const renderProducts = () => {
    return products.map((product) => (
      <div
        key={product.id}
        className="product-item bg-white p-4 shadow-md rounded"
      >
        <img src={product.image} alt={product.title} className="w-full mb-4" />
        <h4 className="text-lg font-bold text-gray-800">{product.title}</h4>
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
    //function (arrow function)
    const itemInCart = cart.find((item) => item.productId === product.id);
    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.productId === product.id) {
          return { ...item, quantity: item.quantity + 1 }; // "key value pair object" it should be "quantity" react state
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
      console.log(product.price);
      return (
        <div className="product-item bg-white p-4 shadow-md rounded" key={item.productId}>
          <img src={product.image} alt={product.title} className="w-small mb-4" />
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
      console.log(`totalprice ${total}`);
    });

    return total.toFixed(2);
  };

  //below code will display
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow">
          <div className="container mx-auto py-4 px-8">
            <h1 className="text-2xl font-bold text-blue-800">Auto Shop</h1>
          </div>
        </header>

        <main className="container mx-auto mt-8 px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {renderProducts()}
          </div>

          <section className="container mx-auto mt-8 px-8">
          
            <div className="bg-light p-4 shadow-md rounded grid grid-cols-1 md:grid-cols-5 gap-8" >
            <h2 className="text-xl font-bold">Cart:</h2>
            {renderCartItems()}
            
           <div>
            <h3 align = "left">  Total price:</h3>
            {calculateTotalPrice()}
            </div>
            </div>
          </section>
        </main>

        <div className="mt-80">
          <footer class="... sticky bottom-0"></footer>
          <footer className="bg-gray-200 py-4 px-8 my-auto">
            <div className="container mx-auto text-center">
              <p className="text-gray-600">
                &copy; 2023 Shopping Cart. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
export default ConstructionSite;
