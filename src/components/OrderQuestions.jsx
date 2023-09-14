import { IoIosArrowForward } from "react-icons/io";
import { methods } from "../db/PaymentsMethod";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const OrderQuestions = ({ section, setSection }) => {
  const [method, setMethod] = useState("");

  const handleMethod = (selectedMethod) => {
    setMethod(selectedMethod);
  };

  return (
    <div className="checkout-section">
      <div className={section === "checkout" ? "inline" : "hidden"}>
        <h4 className="font-semibold">Quando você quer retirar seu pedido?</h4>
        <span className="text-sm text-gray-600">
          *Nós estamos abertos das 08:00 às 19:00
        </span>
      </div>
      <div
        className={section === "checkout" ? "flex flex-col gap-4" : "hidden"}
      >
        <div className="order-questions">
          <div className="flex flex-col">
            <h5 className="text-gray-800 font-semibold">
              O mais rápido possível
            </h5>
            <span className="text-sm">Agora - 10 minutos</span>
          </div>
          <input type="radio" id="now" name="delivery" value="now" checked />
        </div>
        <div className="order-questions" onClick={() => setSection("payment")}>
          <div className="flex flex-col">
            <h5 className="text-gray-800 font-semibold">Método de pagamento</h5>
            <span className="text-sm">
              {method === "" ? "Selecione o método de pagamento" : method}
            </span>
          </div>
          <IoIosArrowForward />
        </div>
      </div>
      <div className={section === "payment" ? "p-2" : "hidden"}>
        <div className="flex flex-col justify-between">
          {methods.map((method) => (
            <div
              key={method.id}
              className="flex justify-between"
              onClick={() => handleMethod(method.payment)}
            >
              <div className="flex items-center gap-2">
                <img src={method.image} width={50} />
                <div className="flex flex-col">
                  <span className="text-gray-800 text-sm font-medium">
                    {method.payment}
                  </span>
                  <p
                    className={
                      method.description !== ""
                        ? "inline text-xs text-gray-800"
                        : "hidden"
                    }
                  >
                    {method.description}
                  </p>
                </div>
              </div>
              <input
                type="radio"
                value={method.payment}
                onChange={() => setMethod(method.payment)}
                name="payment-method"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setSection("checkout")}
            className={
              method === ""
                ? "customize-unselected-button"
                : "customize-selected-button"
            }
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderQuestions;
