import './Product.css';

function Product({ item}) {
  return (
    <div className="product">
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <button >Add to Cart</button>
    </div>
  );
}

export default Product;
