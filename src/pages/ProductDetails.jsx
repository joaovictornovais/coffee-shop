import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";
import { products } from "../db/Products";
import { addProductToCart } from "../db/Cart";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavigationMenu from "../components/NavigationMenu";
import Button from "../components/Button";

const ProductDetails = () => {
  const params = useParams();

  const product = products.find((product) => product.id === Number(params.id));

  const [quantity, setQuantity] = useState(1);

  const [variant, setVariant] = useState("Quente");
  const [size, setSize] = useState("Pequeno");
  const [sugar, setSugar] = useState(true);
  const [ice, setIce] = useState(false);

  const handleQuantity = (operation) => {
    if (operation === "+") setQuantity(quantity + 1);
    else if (operation === "-" && quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubtotal = (size) => {
    if (size === "Pequeno") return 1;
    else if (size === "Médio") return 1.15;
    else return 1.21;
  };

  const handleDescription = () => {
    if (product.category === "Coffee") {
      let message = `${variant}, ${size}`;
      if (sugar) message += ", Adicionar açúcar";
      else if (ice) message += ", Adicionar gelo";
      message += ".";
      return message;
    } else {
      return product.description;
    }
  };

  const addToCart = () => {
    const order = {
      id: uuidv4(),
      productId: product.id,
      name: product.name,
      image: product.image,
      observations: handleDescription(),
      quantity: quantity,
      total: handleTotal(),
    };
    addProductToCart(order);
  };

  const handleTotal = () => {
    return Number(handleSubtotal(size) * product.price * quantity);
  };

  return (
    <div key={product.id} className="flex flex-col gap-2">
      <NavigationMenu link="/" title="Customizar pedido" />
      <div className="max-h-[300px] bg-brown-100 flex justify-center p-8">
        <img className="h-[270px]" src={product.image} alt="prod" />
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-2">
        <div className="product-details-card">
          <div>
            <h2 className="product-category">{product.category}</h2>
            <div className="flex justify-between text-gray-900 font-medium text-xl">
              <h1>{product.name}</h1>
              <p>R${product.price}</p>
            </div>
          </div>

          <div className="flex-between-center">
            <span className="text-sm text-gray-700 font-medium max-w-[50%]">
              {product.description}
            </span>
            <div className="flex items-center justify-between gap-3 border-2 border-brown-800 rounded-xl">
              <button
                className="quantity-button rounded-l-md"
                onClick={() => handleQuantity("-")}
              >
                -
              </button>
              <span className="border-brown-800 w-[15px] text-center">
                {quantity}
              </span>
              <button
                className="quantity-button rounded-r-md"
                onClick={() => handleQuantity("+")}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex-between-center">
            <div className="flex items-center gap-1 text-sm text-gray-800">
              <AiFillStar className="text-yellow-800" size={22} />
              <p>
                <span className="font-bold ">{product.rating}</span> • Rating
                and reviews
              </p>
            </div>
            <AiOutlineArrowRight />
          </div>
        </div>
        <div
          className={
            product.category === "Coffee" ? "product-details-card" : "hidden"
          }
        >
          <h2 className="font-bold text-gray-900">Customizar</h2>
          <div className="flex flex-col gap-4">
            <div className="flex-between-center">
              <span className="text-gray-900 text-sm">Variação</span>
              <div className="flex gap-2">
                <Button
                  value={variant}
                  result={"Quente"}
                  setValue={setVariant}
                  text="Quente"
                />
                <Button
                  value={variant}
                  result={"Gelado"}
                  setValue={setVariant}
                  text="Gelado"
                />
              </div>
            </div>
            <div className="flex-between-center">
              <span className="text-gray-900 text-sm">Tamanho</span>
              <div className="flex gap-2">
                <Button
                  value={size}
                  result={"Pequeno"}
                  setValue={setSize}
                  text="Pequeno"
                />
                <Button
                  value={size}
                  result={"Médio"}
                  setValue={setSize}
                  text="Médio"
                />
                <Button
                  value={size}
                  result={"Grande"}
                  setValue={setSize}
                  text="Grande"
                />
              </div>
            </div>
            <div className="flex-between-center">
              <span className="text-gray-900 text-sm">Açúcar</span>
              <div className="flex gap-2">
                <Button
                  value={sugar}
                  result={true}
                  setValue={setSugar}
                  text="Adicionar"
                />
                <Button
                  value={sugar}
                  result={false}
                  setValue={setSugar}
                  text="Remover"
                />
              </div>
            </div>
            <div className="flex-between-center">
              <span className="text-gray-900 text-sm">Gelo</span>
              <div className="flex gap-2">
                <Button
                  value={ice}
                  result={true}
                  setValue={setIce}
                  text="Adicionar"
                />
                <Button
                  value={ice}
                  result={false}
                  setValue={setIce}
                  text="Remover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-card flex-between-center">
          <div className="flex flex-col py-1">
            <p>Total</p>
            <span className="font-semibold text-gray-800 text-xl">
              R$ {handleTotal().toFixed(2)}
            </span>
          </div>
          <Link to="/checkout">
            <button
              className="customize-selected-button"
              onClick={() => addToCart()}
            >
              Adicionar ao Carrinho
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
