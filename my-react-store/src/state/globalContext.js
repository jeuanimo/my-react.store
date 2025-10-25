import { createContext, useContext } from "react";

//Global Context defines context structure
const GlobalContext = createContext({
  cart: [], // Default cart is an empty array, will hold products added to the cart
  user: {}, // Default user is an empty object, will hold user information
  addProductToCart: () => {}, // function to add product to cart
  clearCart: () => {}, // function to clear the cart
  removeProductFromCart: () => {}, //function to remove specific product from cart
});

// Custom hook to use the global context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export default GlobalContext; //export the context for use in other components
