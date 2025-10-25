import { useState } from "react";
import { IconDeviceFloppy, IconTicket } from "@tabler/icons-react";
import "./Admin.css";

function Admin() {
  // Product state
  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [products, setProducts] = useState([]);

  // Coupon state
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [coupons, setCoupons] = useState([]);

  function saveProduct() {
    // Logic to save the product
    console.log("Product saved:", {
      title: productTitle,
      category: productCategory,
      image: productImage,
      price: productPrice,
    });
    setProducts([
      ...products,
      {
        title: productTitle,
        category: productCategory,
        image: productImage,
        price: productPrice,
      },
    ]);

    // Reset form
    setProductTitle("");
    setProductCategory("");
    setProductImage("");
    setProductPrice(0);

    console.log(products);
  }

  function saveCoupon() {
    // Logic to save the coupon
    console.log("Coupon saved:", {
      code: couponCode,
      discount: couponDiscount,
    });
    setCoupons([...coupons, { code: couponCode, discount: couponDiscount }]);

    // Reset form
    setCouponCode("");
    setCouponDiscount(0);

    console.log(coupons);
  }
  return (
    <div className="admin">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Sigma Electronics Administration Page</h1>
        </div>

        <div className="admin-sections">
          <section className="admin-section">
            <h3>Add Products</h3>

            <div className="card">
              <div className="card-body">
                <div>
                  <label className="form-label">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product title"
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">Category:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product category"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">Image URL:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter image URL"
                    value={productImage}
                    onChange={(e) => setProductImage(e.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">Price:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter price"
                    step="0.01"
                    min="0"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div>
                  <button onClick={saveProduct} className="btn btn-primary">
                    <IconDeviceFloppy
                      size={18}
                      stroke={1.5}
                      style={{ marginRight: "8px" }}
                    />
                    Save Product
                  </button>
                </div>
              </div>
            </div>

            <div className="saved-items">
              <h4>Saved Products</h4>
              {products.length > 0 ? (
                <div className="items-grid">
                  {products.map((product, index) => (
                    <div
                      key={`product-${index}`}
                      className="item-card product-card"
                    >
                      <div className="item-card-header">
                        <h5>{product.title}</h5>
                        <span className="category-badge">
                          {product.category}
                        </span>
                      </div>
                      <div className="item-card-body">
                        {product.image && (
                          <div className="image-preview">
                            <img
                              src={product.image}
                              alt={product.title}
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                          </div>
                        )}
                        <div className="price-display">${product.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-items">No products saved yet.</p>
              )}
            </div>
          </section>

          <section>
            <h2>Coupons Management</h2>
            <h3>Add Coupons</h3>

            <div className="card">
              <div className="card-body">
                <div>
                  <label className="form-label"> Coupon Code: </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Enter coupon code "
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label"> Discount Percentage: </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder=" Enter discount percentage "
                    value={couponDiscount}
                    onChange={(e) => setCouponDiscount(e.target.value)}
                  />
                </div>
                <div>
                  <button onClick={saveCoupon} className="btn btn-primary">
                    <IconTicket
                      size={18}
                      stroke={1.5}
                      style={{ marginRight: "8px" }}
                    />
                    Save Coupon
                  </button>
                </div>
              </div>
            </div>

            <div className="saved-items">
              <h4>Saved Coupons</h4>
              {coupons.length > 0 ? (
                <div className="items-grid">
                  {coupons.map((coupon, index) => (
                    <div
                      key={`coupon-${index}`}
                      className="item-card coupon-card"
                    >
                      <div className="item-card-header">
                        <h5>{coupon.code}</h5>
                        <span className="discount-badge">
                          {coupon.discount}% OFF
                        </span>
                      </div>
                      <div className="item-card-body">
                        <div className="coupon-info">
                          <p>Discount: {coupon.discount}%</p>
                          <p>Status: Active</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-items">No coupons saved yet.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Admin;
