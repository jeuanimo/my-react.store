import "./Product.css";
import QuantityPicker from "./QtyPicker";
function Product() {
    return (
        <div className="product">
            <img src="https://picsum.photos/200/300" alt="Product" />
            <h5>Product Title goes here </h5>
            <div className="prices">
                <label>Price</label>
                <label>Total</label>
            </div>
           <QuantityPicker></QuantityPicker>
        </div>
    );
}
export default Product;