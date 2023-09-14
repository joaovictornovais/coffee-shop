import CheckoutFooter from "../components/CheckoutFooter";
import NavigationMenu from "../components/NavigationMenu";
import OrderCard from "../components/OrderCard";
import OrderQuestions from "../components/OrderQuestions";

const Checkout = () => {
  return (
    <>
      <NavigationMenu link="/" title={"Finalizar pedido"} />
      <OrderCard />
      <OrderQuestions />
      <CheckoutFooter total={12} />
    </>
  );
};

export default Checkout;
