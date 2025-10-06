import "./QtyPicker.css";
import { useState } from "react";

// Logical component
function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);
  
  function increase() {
    setQuantity(quantity + 1);
  }
  
  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="qty-picker">
      <button className="btnDecrease" onClick={decrease} disabled={quantity <= 1}>
        -
      </button>
      <label className="qty-label">{quantity}</label>
      <button className="btnIncrease" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;

