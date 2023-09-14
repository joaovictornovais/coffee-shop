import { useState } from "react";
import CheckoutFooter from "../components/CheckoutFooter";
import NavigationMenu from "../components/NavigationMenu";
import OrderCard from "../components/OrderCard";
import OrderQuestions from "../components/OrderQuestions";

const Checkout = () => {
  const [section, setSection] = useState("checkout");

  const handleTitle = () => {
    if (section === "checkout") {
      return "Finalizar pedido";
    } else return "Método de pagamento";
  };

  return (
    <>
      <NavigationMenu link="/" title={handleTitle()} />
      <OrderCard />
      <OrderQuestions section={section} setSection={setSection} />
      <CheckoutFooter total={1.99} />
    </>
  );
};

export default Checkout;
