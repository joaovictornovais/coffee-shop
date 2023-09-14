import { IoIosArrowForward } from "react-icons/io";

const OrderQuestions = () => {
  return (
    <div className="checkout-section">
      <div>
        <h4 className="font-semibold">Quando você quer retirar seu pedido?</h4>
        <span className="text-sm text-gray-600">
          *Nós estamos abertos das 08:00 às 19:00
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="order-questions">
          <div className="flex flex-col">
            <h5 className="text-gray-800 font-semibold">
              O mais rápido possível
            </h5>
            <span className="text-sm">Agora - 10 minutos</span>
          </div>
          <input type="radio" id="now" name="delivery" value="now" />
        </div>
        <div className="order-questions">
          <div className="flex flex-col">
            <h5 className="text-gray-800 font-semibold">Mais tarde</h5>
            <span className="text-sm">Definir horário</span>
          </div>
          <input type="radio" id="now" name="delivery" value="now" />
        </div>
        <div className="order-questions">
          <div className="flex flex-col">
            <h5 className="text-gray-800 font-semibold">Método de pagamento</h5>
            <span className="text-sm">Pix</span>
          </div>
          <IoIosArrowForward />
        </div>
        <div className="flex justify-between items-center border-b-2 p-1">
          <div className="flex flex-col">
            <h5 className="text-gray-800 font-semibold">Cupom de desconto</h5>
            <span className="text-sm">Nenhum cupom adicionado</span>
          </div>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default OrderQuestions;
