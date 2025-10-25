import Product from "../components/Product";
import { IconFilter, IconShoppingBag } from "@tabler/icons-react";
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
        <div className="catalog-hero">
          <div className="hero-content">
            <h1>Loading...</h1>
            <p>Preparing our amazing products for you</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="catalog">
      {/* Hero Section */}
      <section className="catalog-hero">
        <div className="hero-content">
          <h1>Discover Our Amazing Products</h1>
          <p className="hero-subtitle">
            Premium Electronics & Tech Accessories
          </p>
          <p className="hero-description">
            Find the perfect technology solutions from our curated collection of
            top-quality electronics, accessories, and innovative gadgets.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="catalog-container">
        <div className="content-wrapper">
          {/* Category Filter Section */}
          <section className="filter-section">
            <div className="filter-header">
              <IconFilter size={24} stroke={2} />
              <h3>Filter by Category</h3>
            </div>
            <div className="filter-buttons">
              <button
                className={
                  selectedCategory === "All"
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => handleCategoryChange("All")}
              >
                <IconShoppingBag size={18} stroke={2} />
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
          </section>

          {/* Products Grid */}
          <section className="products-section">
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
          </section>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
