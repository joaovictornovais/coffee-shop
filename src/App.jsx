import { useState } from "react";
import Searchbar from "./components/Searchbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <Router>
      <div className="p-4 max-w-4xl mx-auto space-y-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
