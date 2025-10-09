import Product from "../components/Product";
import "./Catalog.css";
import DataService from "../services/dataService";
import { useState, useEffect } from "react";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataService = new DataService();
    const data = dataService.getProducts();
    const categoryData = dataService.getCategories();

    setAllProducts(data);
    setProducts(data);
    setCategories(categoryData);
    setLoading(false);
    console.log(data);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const dataService = new DataService();

    if (category === "All") {
      setProducts(allProducts);
    } else {
      const filteredProducts = dataService.getProductsByCategory(category);
      setProducts(filteredProducts);
    }
  };

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

      <div className="category-filter">
        <h3>Filter by Category:</h3>
        <div className="filter-buttons">
          <button
            className={
              selectedCategory === "All" ? "filter-btn active" : "filter-btn"
            }
            onClick={() => handleCategoryChange("All")}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <Product
            key={product._id}
            _id={product._id}
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
