import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Toast from "./components/Toast";
import "./App.css";
import Catalog from "./pages/Catalog";
import { CartProvider, useCart } from "./context/CartContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function AppContent() {
  const { toastMessage, isToastVisible, hideToast } = useCart();

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        </main>
        <Footer />
        <Cart />
        <Toast
          message={toastMessage}
          isVisible={isToastVisible}
          onClose={hideToast}
        />
      </div>
    </BrowserRouter>
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
