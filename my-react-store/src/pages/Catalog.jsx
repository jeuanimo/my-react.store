import Product from "../components/Product";
import "./Catalog.css";

function Catalog() {
  // Sample product data
  const products = [
    {
      title: "Premium Wireless Headphones",
      price: 99.99,
      image: "https://picsum.photos/200/300?random=1"
    },
    {
      title: "Smart Fitness Watch",
      price: 199.99,
      image: "https://picsum.photos/200/300?random=2"
    },
    {
      title: "Bluetooth Speaker",
      price: 49.99,
      image: "https://picsum.photos/200/300?random=3"
    },
    {
      title: "Wireless Mouse",
      price: 29.99,
      image: "https://picsum.photos/200/300?random=4"
    },
    {
      title: "Gaming Keyboard",
      price: 79.99,
      image: "https://picsum.photos/200/300?random=5"
    },
    {
      title: "USB-C Hub",
      price: 39.99,
      image: "https://picsum.photos/200/300?random=6"
    }
  ];

  return (
    <div className="catalog">
      <div className="catalog-header">
        <h1>Discover Our Amazing Products</h1>
        <p>Find the perfect tech accessories for your lifestyle</p>
      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
