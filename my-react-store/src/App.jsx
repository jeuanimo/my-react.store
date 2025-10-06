import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
