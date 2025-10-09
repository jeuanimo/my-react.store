import "./Product.css";
import QuantityPicker from "./QtyPicker";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Product(props) {
  // Default values if no props provided
  const {
    _id = "default-product",
    title = "Premium Wireless Headphones",
    price = 99.99,
    image = "/images/products/headphones.jpg", // Default to JPG image
    category = "Audio",
  } = props;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [resetKey, setResetKey] = useState(0);
  const { addToCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    setTotal(price * newQuantity);
  };

  const handleAddToCart = () => {
    addToCart({ _id, title, price, image, category }, quantity);
    // Reset quantity after adding to cart
    setQuantity(1);
    setTotal(price);
    setResetKey((prev) => prev + 1); // Trigger reset in QtyPicker
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <div className="prices">
        <div className="price-section">
          <span className="price-label">Price:</span>
          <span className="price-value">${price.toFixed(2)}</span>
        </div>
        <div className="total-section">
          <span className="total-label">Total:</span>
          <span className="total-value">${total.toFixed(2)}</span>
        </div>
      </div>
      <QuantityPicker
        onQuantityChange={handleQuantityChange}
        resetTrigger={resetKey}
      />
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add {quantity} to Cart
      </button>
    </div>
  );
}

export default Product;
