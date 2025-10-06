import Product from "../components/Product";
import "./Catalog.css"

function Catalog() {
  return (
    <div className="catalog">
      <h1>Check our new products</h1>
      <div className="products-grid">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Catalog;