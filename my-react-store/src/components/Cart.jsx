import React from "react";
import { useGlobalContext } from "../state/globalContext";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    isCartOpen,
    toggleCart,
    user,
  } = useGlobalContext();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={toggleCart}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          {user.isLoggedIn && (
            <p className="cart-user">Shopping as: {user.name}</p>
          )}
          <button className="cart-close" onClick={toggleCart}>
            ×
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item._id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h4>{item.title}</h4>
                      <p className="cart-item-price">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="cart-item-quantity">
                        <button
                          onClick={() =>
                            updateQuantity(item._id, item.quantity - 1)
                          }
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item._id, item.quantity + 1)
                          }
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <h3>Total: ${getCartTotal().toFixed(2)}</h3>
                </div>
                <div className="cart-actions">
                  <button onClick={clearCart} className="clear-cart-btn">
                    Clear Cart
                  </button>
                  <button className="checkout-btn">Checkout</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
