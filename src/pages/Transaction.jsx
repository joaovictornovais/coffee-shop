import NavigationMenu from "../components/NavigationMenu";
import ReceiptOrder from "../components/ReceiptOrder";

const Transaction = () => {
  return (
    <>
      <NavigationMenu title="Ordem de recebimento" link="/" />
      <ReceiptOrder />
    </>
  );
};

export default Transaction;
