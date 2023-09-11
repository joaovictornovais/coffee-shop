/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
const ItemsResult = ({ section, filter, filterButton, filterPrice }) => {
  const products = [
    {
      id: 1,
      name: "Café com leite",
      description: "O bom e velho café com leite",
      category: "Coffee",
      image: "src/assets/products/coffee/1.svg",
      price: 6.99,
      isPromotion: true,
      promoPrice: 4.99,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Café com leite de cacau e caramelo",
      description: "Leite vaporizado com mocha e cobertura de caramelo ",
      category: "Coffee",
      image: "src/assets/products/coffee/2.svg",
      price: 14.99,
      isPromotion: true,
      promoPrice: 10.43,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Nitro cold brew",
      description:
        "Café preparado com nitrogênio, sem açúcar e creme aveludado",
      category: "Coffee",
      image: "src/assets/products/coffee/3.svg",
      price: 16.99,
      isPromotion: true,
      promoPrice: 12.89,
      rating: 4.4,
    },
    {
      id: 4,
      name: "Café Mocha",
      description: "Café expresso com cobertura mocha, leite e creme batido",
      category: "Coffee",
      image: "src/assets/products/coffee/4.svg",
      price: 12.99,
      isPromotion: true,
      promoPrice: 11.6,
      rating: 4.7,
    },
    {
      id: 5,
      name: "Caramel Latte",
      description: "Café expresso, leite fresco e caramelo",
      category: "Coffee",
      image: "src/assets/products/coffee/5.svg",
      price: 9.99,
      isPromotion: false,
      promoPrice: 7.89,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Coca-cola lata 350ml",
      description:
        "Com a tradição e o gosto incomparável, ela se torna a melhor opção de refresco em qualquer momento. ",
      category: "Drinks",
      image: "src/assets/products/drinks/1.png",
      price: 4.99,
      isPromotion: false,
      promoPrice: 3.89,
      rating: 4.8,
    },
    {
      id: 7,
      name: "Pepsi lata 350ml",
      description:
        "A Pepsi Lata 350ml é um refrigerante de cola com aroma natural, apreciada pelo sabor suave e refrescante. ",
      category: "Drinks",
      image: "src/assets/products/drinks/2.png",
      price: 4.89,
      isPromotion: false,
      promoPrice: 4.29,
      rating: 4.7,
    },
    {
      id: 9,
      name: "NESCAU prontinho 200ml",
      description: "Uma opção nutritiva e gostosa para seus filhos.",
      category: "Drinks",
      image: "src/assets/products/drinks/4.png",
      price: 2.89,
      isPromotion: true,
      promoPrice: 1.96,
      rating: 4.4,
    },
    {
      id: 10,
      name: "Croissant",
      description: "O clássico pão francês.",
      category: "Pastry",
      image: "src/assets/products/foods/1.png",
      price: 4.99,
      isPromotion: false,
      promoPrice: 4.29,
      rating: 4.7,
    },
  ];

  const inputFilter = products.filter((product) => {
    const name = product.name
      .toLowerCase()
      .includes(filter.toLowerCase().trim());
    const category = product.category === section;
    if (filter !== "") return name;
    else return category;
  });

  const priceResult = inputFilter.slice().sort((buttonA, buttonB) => {
    if (filterPrice === "up") return buttonA.price - buttonB.price;
    else if (filterPrice === "down") return buttonB.price - buttonA.price;
    else return 0;
  });

  const buttonResult = priceResult.filter((button) => {
    return filterButton.every((filter) => {
      if (filter === "Rating 4.5+") return button.rating > 4.5;
      else if (filter === "Promotions") return button.isPromotion === true;
    });
  });

  return (
    <div className="flex flex-col gap-4">
      {buttonResult.map((product) => (
        <div
          key={product.id}
          className="flex gap-4 bg-gray-50 p-2 justify-between border-b-2 rounded-xl"
        >
          <div className="flex gap-4">
            <div className="flex flex-col items-center rounded-full bg-gray-200 relative p-1 w-[70px] h-[70px]">
              <img
                className="aspect-[2/2] min-w-[66px] min-h-[69px] p-1"
                src={product.image}
              />
              <div className="flex items-center absolute bottom-1 gap-1 text-sm font-medium bg-gray-100 p-0.5 rounded-2xl">
                {<AiFillStar className="text-yellow-600" />}
                <p>{product.rating}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <h3 className="font-bold text-sm">{product.name}</h3>
              <p className="text-gray-800 text-xs">{product.description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className={product.isPromotion ? "inline" : "hidden"}>
              R${product.promoPrice.toString().replace(".", ",")}
            </p>
            <p
              className={
                !product.isPromotion
                  ? "items-center flex"
                  : "items-center flex text-gray-500 line-through"
              }
            >
              R${product.price.toString().replace(".", ",")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsResult;
