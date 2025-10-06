import "./Product.css";
import QuantityPicker from "./QtyPicker";
import { useState } from "react";

function Product(props) {
    // Default values if no props provided
    const {
        title = "Premium Wireless Headphones",
        price = 99.99,
        image = "https://picsum.photos/200/300"
    } = props;

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(price);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
        setTotal(price * newQuantity);
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
            <QuantityPicker onQuantityChange={handleQuantityChange} />
            <button className="add-to-cart-btn">
                Add {quantity} to Cart
            </button>
        </div>
    );
}

export default Product;