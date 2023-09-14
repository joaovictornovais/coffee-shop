import { useState } from "react";

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (operation) => {
    if (operation === "+") setQuantity(quantity + 1);
    else if (operation === "-" && quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <div className="flex items-center justify-between gap-3 border-2 border-brown-800 rounded-xl">
      <button
        className="quantity-button rounded-l-md"
        onClick={() => handleQuantity("-")}
      >
        -
      </button>
      <span className="border-brown-800 w-[15px] text-center">{quantity}</span>
      <button
        className="quantity-button rounded-r-md"
        onClick={() => handleQuantity("+")}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
