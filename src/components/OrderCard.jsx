import { products } from "../db/Products";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import NavigationMenu from "./NavigationMenu";
import QuantityButton from "./QuantityButton";
import { cart } from "../db/Cart";

const OrderCard = () => {
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
                  <span className="text-sm">
                    Ice, Regular, Normal Sugar, Normal Ice
                  </span>
                </div>
              </div>
              <div className="min-w-[30%] flex flex-col items-end justify-center">
                <h2 className="text-gray-800 font-semibold text-lg">
                  R$ {product.total}
                </h2>
                <span>x1</span>
              </div>
            </div>
            <div className="flex justify-between text-gray-800">
              <div className="flex items-center gap-2">
                <FaRegEdit />
                <span className="text-sm font-medium">Editar</span>
              </div>
              <div className="flex items-center gap-2">
                <BsTrash3 />
                <QuantityButton />
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
