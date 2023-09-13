import { useState } from "react";
import Searchbar from "./components/Searchbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [data, setData] = useState("");

  const searchToFilters = (search) => {
    setData(search);
  };
  return (
    <Router>
      <div className="p-4 max-w-4xl mx-auto space-y-4">
        <Searchbar searchToFilters={searchToFilters} />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
