import React from 'react';
import './Menu.css';
import Product from './Product';
const products = [
    { id: 1, name: "Lamington", price: "$3", category: "Cakes" },
    { id: 2, name: "Pavlova", price: "$4.5", category: "Cakes" },
    { id: 3, name: "Croissant", price: "$2.5", category: "Pastries" },
    { id: 4, name: "Baguette", price: "$1.5", category: "Breads" },
    { id: 5, name: "Sourdough", price: "$2", category: "Breads" },
    { id: 6, name: "Danish", price: "$3", category: "Pastries" },
    { id: 7, name: "Muffin", price: "$2.5", category: "Pastries" },
  ];
function Menu() {

  return (
    <div className="menu">
      {products.map(product => (
        <Product key={product.name} item={product}  />
      ))}
    </div>
  );
}

export default Menu;
