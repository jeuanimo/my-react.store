import { useState, useEffect } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
  // Cart State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // User State
  const [user, setUser] = useState({
    id: 25,
    name: "Jeuan",
    cohort: 61,
    email: "",
    isLoggedIn: false,
    preferences: {},
  });

  // Toast State
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    // Load cart
    const savedCart = localStorage.getItem("sigmaElectronicsCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // Load user (keep default user if no saved user)
    const savedUser = localStorage.getItem("sigmaElectronicsUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser((prevUser) => ({ ...prevUser, ...parsedUser }));
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("sigmaElectronicsCart", JSON.stringify(cart));
  }, [cart]);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    localStorage.setItem("sigmaElectronicsUser", JSON.stringify(user));
  }, [user]);

  // Toast Functions
  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const hideToast = () => {
    setIsToastVisible(false);
  };

  function addProductToCart(product, quantity = 1) {
    console.log("Global Add:", product);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);

      if (existingItem) {
        showToast(`Updated ${product.title} quantity in cart`);
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        showToast(`Added ${product.title} to cart`);
        return [...prevCart, { ...product, quantity }];
      }
    });
  }

  function clearCart() {
    setCart([]);
    showToast("Cart cleared");
  }

  function removeProductFromCart(productId) {
    const product = cart.find((item) => item._id === productId);
    if (product) {
      showToast(`Removed ${product.title} from cart`);
    }
    setCart((prevCart) => prevCart.filter((p) => p._id !== productId));
  }

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeProductFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // User Functions
  const loginUser = (userData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...userData,
      isLoggedIn: true,
    }));
    showToast(`Welcome back, ${userData.name}!`);
  };

  const logoutUser = () => {
    setUser((prevUser) => ({
      ...prevUser,
      email: "",
      isLoggedIn: false,
      preferences: {},
    }));
    showToast("Successfully logged out");
  };

  const updateUser = (userData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...userData,
    }));
    showToast("Profile updated successfully");
  };

  return (
    <GlobalContext.Provider
      value={{
        // Cart
        cart: cart,
        cartItems: cart, // For backward compatibility
        addProductToCart: addProductToCart,
        clearCart: clearCart,
        removeProductFromCart: removeProductFromCart,
        updateCartQuantity: updateCartQuantity,
        getCartTotal: getCartTotal,
        getCartCount: getCartCount,
        isCartOpen: isCartOpen,
        toggleCart: toggleCart,
        setIsCartOpen: setIsCartOpen,

        // Legacy cart functions for compatibility
        addToCart: addProductToCart,
        removeFromCart: removeProductFromCart,
        updateQuantity: updateCartQuantity,

        // User
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        updateUser: updateUser,

        // Toast
        toastMessage: toastMessage,
        isToastVisible: isToastVisible,
        showToast: showToast,
        hideToast: hideToast,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
export default GlobalProvider;
