import Product from "../components/Product";
import "./Catalog.css";
import DataService from "../services/dataService";
import { useState, useEffect } from "react";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataService = new DataService();
    const data = dataService.getProducts();
    setProducts(data);
    setLoading(false);
    console.log(data);
  }, []);

  if (loading) {
    return (
      <div className="catalog">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="catalog">
      <div className="catalog-header">
        <h1>Discover Our Amazing Products</h1>
        <p>Find the perfect tech accessories for your lifestyle</p>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <Product
            key={product._id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
