import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";
import { products } from "../db/Products";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavigationMenu from "../components/NavigationMenu";
import Button from "../components/Button";

const ProductDetails = () => {
  const params = useParams();

  const product = products.filter(
    (product) => product.id === Number(params.id)
  );

  const [quantity, setQuantity] = useState(1);

  const [variant, setVariant] = useState("");
  const [size, setSize] = useState("");
  const [sugar, setSugar] = useState();
  const [ice, setIce] = useState();

  const handleQuantity = (operation) => {
    if (operation === "+") setQuantity(quantity + 1);
    else if (operation === "-" && quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubtotal = (size) => {
    if (size === "regular") return 1;
    else if (size === "medium") return 1.15;
    else return 1.21;
  };

  const addToCart = (id, price, name, category) => {
    const order = [
      {
        id: uuidv4(),
        productId: id,
        price: price,
        quantity: quantity,
        productName: name,
        productCategory: category,
        variant: variant,
        size: size,
        sugar: sugar,
        ice: ice,
        total: (handleSubtotal(size) * price).toFixed(2),
      },
    ];
    console.log(order);
  };

  useEffect(() => {
    addToCart();
  }, []);

  return product.map((prod) => (
    <div key={prod.id} className="flex flex-col gap-2">
      <NavigationMenu link="/" title="Customizar pedido" />
      <div className="max-h-[300px] bg-brown-100 flex justify-center p-8">
        <img className="h-[270px]" src={prod.image} alt="prod" />
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-2">
        <div className="product-details-card">
          <div>
            <h2 className="product-category">{prod.category}</h2>
            <div className="flex justify-between text-gray-900 font-medium text-xl">
              <h1>{prod.name}</h1>
              <p>R${(prod.price * handleSubtotal(size)).toFixed(2)}</p>
            </div>
          </div>

          <div className="flex-between-center">
            <span className="text-sm text-gray-700 font-medium max-w-[50%]">
              {prod.description}
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
                <span className="font-bold ">{prod.rating}</span> • Rating and
                reviews
              </p>
            </div>
            <AiOutlineArrowRight />
          </div>
        </div>
        <div
          className={
            prod.category === "Coffee" ? "product-details-card" : "hidden"
          }
        >
          <h2 className="font-bold text-gray-900">Customizar</h2>
          <div className="flex flex-col gap-4">
            <div className="flex-between-center">
              <span className="text-gray-900 text-sm">Variação</span>
              <div className="flex gap-2">
                <Button
                  value={variant}
                  result={"hot"}
                  setValue={setVariant}
                  text="Quente"
                />
                <Button
                  value={variant}
                  result={"ice"}
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
                  result={"regular"}
                  setValue={setSize}
                  text="Pequeno"
                />
                <Button
                  value={size}
                  result={"medium"}
                  setValue={setSize}
                  text="Médio"
                />
                <Button
                  value={size}
                  result={"large"}
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
              R${" "}
              {(handleSubtotal(size) * prod.price * quantity)
                .toFixed(2)
                .replace(".", ",")}
            </span>
          </div>
          <Link to="/checkout">
            <button
              className="customize-selected-button"
              onClick={() =>
                addToCart(prod.id, prod.price, prod.name, prod.category)
              }
            >
              Adicionar ao Carrinho
            </button>
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default ProductDetails;
