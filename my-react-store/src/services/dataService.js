const catalog = [
  {
    title: "Premium Wireless Headphones",
    category: "Audio",
    price: 99.99,
    image: "/images/products/headphones.jpg",
    _id: 1,
  },
  {
    title: "Smart Fitness Watch",
    category: "Wearables",
    price: 199.99,
    image: "/images/products/smartwatch.jpg",
    _id: 2,
  },
  {
    title: "Bluetooth Speaker",
    category: "Audio",
    price: 49.99,
    image: "/images/products/speaker.jpg",
    _id: 3,
  },
  {
    title: "Wireless Mouse",
    category: "Accessories",
    price: 29.99,
    image: "/images/products/mouse.jpg",
    _id: 4,
  },
  {
    title: "Gaming Keyboard",
    category: "Gaming",
    price: 79.99,
    image: "/images/products/keyboard.jpg",
    _id: 5,
  },
  {
    title: "USB-C Hub",
    category: "Accessories",
    price: 39.99,
    image: "/images/products/usb-hub.jpg",
    _id: 6,
  },
];

class DataService {
  getProducts() {
    return catalog;
  }

  getProductById(id) {
    return catalog.find((product) => product._id === id);
  }

  getProductsByCategory(category) {
    return catalog.filter((product) => product.category === category);
  }

  getCategories() {
    const categories = [...new Set(catalog.map((product) => product.category))];
    return categories.sort();
  }
}

export default DataService;
