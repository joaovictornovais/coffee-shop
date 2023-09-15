import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (product) => {
    const filter = cart.find((item) => item.id);
    if (
      filter &&
      filter.productId === product.productId &&
      filter.observations === product.observations
    ) {
      filter.quantity += 1;
      filter.total += Number(product.total);
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };

  const removeItemFromCart = (itemId) => {
    const filter = cart.filter((item) => item.id !== itemId);
    setCart(filter);
  };

  const handleItemQuantity = (itemId, operation) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === itemId) {
          let newQuantity = item.quantity;

          if (operation === "adicionar") newQuantity += 1;
          else if (operation === "remover" && item.quantity > 1)
            newQuantity -= 1;

          const newTotal = newQuantity * item.price;
          return { ...item, quantity: newQuantity, total: newTotal };
        }
        return item;
      });
      return updatedCart;
    });
  };

  return (
    <Router>
      <div className="p-4 max-w-4xl mx-auto space-y-4">
        <Routes>
          <Route path="/" element={<Home cart={cart} />} />
          <Route
            path="/products/:id"
            element={<ProductDetails addItemToCart={addItemToCart} />}
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                removeItemFromCart={removeItemFromCart}
                handleItemQuantity={handleItemQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
