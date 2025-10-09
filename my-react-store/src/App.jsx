import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Toast from "./components/Toast";
import "./App.css";
import Catalog from "./pages/Catalog";
import { CartProvider, useCart } from "./context/CartContext";

function AppContent() {
  const { toastMessage, isToastVisible, hideToast } = useCart();
  
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <Catalog />
      </main>
      <Footer />
      <Cart />
      <Toast 
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={hideToast}
      />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
