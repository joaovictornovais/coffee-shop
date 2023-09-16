/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CheckoutFooter = ({ cart, clearCart }) => {
  const total = cart.reduce((resultado, valor) => {
    return resultado + Number(valor.total);
  }, 0);

  return (
    <footer className="flex justify-between w-full p-4 bg-white">
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-800 font-medium text-xl">Total</h3>
        <h2 className="text-2xl font-bold">R${total.toFixed(2)}</h2>
      </div>
      <Link to="/transaction">
        <button className="customize-selected-button" onClick={clearCart}>
          Finalizar pedido
        </button>
      </Link>
    </footer>
  );
};

export default CheckoutFooter;
