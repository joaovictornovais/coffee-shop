/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

const OrderCard = ({ cart, removeItemFromCart, handleItemQuantity }) => {
  return (
    <div className="checkout-section">
      {cart.map((product) => (
        <div key={product.id} className="flex gap-2 text-gray-600">
          <img src={product.image} />
          <div className="flex flex-col w-full gap-3">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-4">
                <div className="flex flex-col">
                  <h3 className="text-gray-800 font-semibold text-lg">
                    {product.name}
                  </h3>
                  <span className="text-sm">{product.observations}</span>
                </div>
              </div>
              <div className="min-w-[30%] flex flex-col items-end justify-center">
                <h2 className="text-gray-800 font-semibold text-lg">
                  R$ {product.total.toFixed(2)}
                </h2>
                <span>x{product.quantity}</span>
              </div>
            </div>
            <div className="flex justify-between text-gray-800">
              <Link
                onClick={() => removeItemFromCart(product.id)}
                to={`/products/${product.productId}`}
                className="flex items-center gap-2"
              >
                <FaRegEdit />
                <span className="text-sm font-medium">Editar</span>
              </Link>
              <div className="flex items-center gap-2">
                <BsTrash3
                  size={20}
                  onClick={() => removeItemFromCart(product.id)}
                />
                <div className="flex gap-2 border-2 border-brown-800 rounded-xl items-center">
                  <button
                    className="bg-brown-800 text-white px-2 rounded-l-md"
                    onClick={() => handleItemQuantity(product.id, "remover")}
                  >
                    -
                  </button>
                  <span className="text-xs text-center w-[12px]">
                    {product.quantity}
                  </span>
                  <button
                    className="bg-brown-800 text-white px-2 rounded-r-md"
                    onClick={() => handleItemQuantity(product.id, "adicionar")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <NavigationMenu
        color="brown"
        css="text-brown-800 font-semibold"
        link="/"
        arrow={<IoIosArrowBack />}
        title="Adicionar mais itens ao carrinho"
      />
    </div>
  );
};

export default OrderCard;
