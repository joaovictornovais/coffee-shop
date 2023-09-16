import { BsCheckLg } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const ReceiptOrder = (param) => {
  const getDate = (param) => {
    let time = moment().format("HH:mm:ss");
    let date = moment().format("DD/MM/yyyy");
    if (param === "time") return time;
    return date;
  };

  return (
    <div className="gap-6 bg-white p-8 text-gray-700 text-xs sm:text-base">
      <fieldset className="border-2 flex flex-col gap-2 space-y-2 rounded-xl">
        <legend className="mx-auto">
          <BsCheckLg className="bg-green-400 border-4 border-green-100 h-20 w-20 rounded-full p-4 text-white" />
        </legend>
        <div className="flex flex-col mx-auto text-center gap-1 p-4">
          <h2 className="text-brown-800 font-semibold">Obrigado!</h2>
          <p className="text-sm">Sua transação foi um sucesso</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between px-4">
            <span>ID da Transação</span>
            <p>{uuidv4()}</p>
          </div>
          <div className="flex justify-between px-4">
            <span>Data</span>
            <p>{getDate()}</p>
          </div>
          <div className="flex justify-between px-4">
            <span>Hora</span>
            <p>{getDate("time")}</p>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default ReceiptOrder;
