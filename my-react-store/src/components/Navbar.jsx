import { Link } from "react-router-dom";
import "./NavbarNew.css";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { getCartCount, toggleCart } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>SIGMA Electronics</h1>
        </div>
        <div className="navbar-logo-center">
          <img
            src="/images/sigma-electronics-logo.png"
            alt="Sigma Electronics Logo"
            className="navbar-logo"
          />
        </div>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-link">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav-link">
              <Link to={"/catalog"}>Catalog</Link>
            </li>
            <li className="nav-link">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="nav-link">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="nav-link cart-link">
              <button onClick={toggleCart} className="cart-button">
                🛒
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
