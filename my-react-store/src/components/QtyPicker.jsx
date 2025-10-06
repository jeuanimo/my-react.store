import "./QtyPicker.css";
import { useState } from "react";

// Logical component
function QuantityPicker({ onQuantityChange, initialQuantity = 1 }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  function increase() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onQuantityChange) {
      onQuantityChange(newQuantity);
    }
  }

  function decrease() {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) {
        onQuantityChange(newQuantity);
      }
    }
  }

  return (
    <div className="qty-picker">
      <button
        className="btnDecrease"
        onClick={decrease}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <label className="qty-label" aria-label={`Quantity: ${quantity}`}>
        {quantity}
      </label>
      <button
        className="btnIncrease"
        onClick={increase}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
