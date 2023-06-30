import React, { useState } from "react";

function AddToCartButton({ product, handleQuantityChange, addToCart }) {
  return (
    <div>
      <label htmlFor={`quantity_${product.id}`} style={{ marginLeft: 100, marginRight: 10 }}>
        Quantity:
      </label>
      <input
        type="number"
        id={`quantity_${product.id}`}
        min="0"
        defaultValue="0"
        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
        style={{ width: 40, marginRight: 5 }}
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default AddToCartButton;
