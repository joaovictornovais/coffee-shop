/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
const ItemsResult = ({ section, filter }) => {
  const products = [
    {
      id: 1,
      name: "Café com leite",
      description: "O bom e velho café com leite",
      category: "Coffee",
      image: "src/assets/products/coffee/1.svg",
      price: 6.9,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Café com leite de cacau e caramelo",
      description: "Leite vaporizado com mocha e cobertura de caramelo ",
      category: "Coffee",
      image: "src/assets/products/coffee/2.svg",
      price: 14.9,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Nitro cold brew",
      description:
        "Café preparado com nitrogênio, sem açúcar e creme aveludado",
      category: "Coffee",
      image: "src/assets/products/coffee/3.svg",
      price: 16.9,
      rating: 4.4,
    },
    {
      id: 4,
      name: "Café Mocha",
      description: "Café expresso com cobertura mocha, leite e creme batido",
      category: "Coffee",
      image: "src/assets/products/coffee/4.svg",
      price: 12.9,
      rating: 4.7,
    },
    {
      id: 5,
      name: "Caramel Latte",
      description: "Café expresso, leite fresco e caramelo",
      category: "Coffee",
      image: "src/assets/products/coffee/5.svg",
      price: 9.9,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Coca-cola lata 350ml",
      description:
        "Com a tradição e o gosto incomparável, ela se torna a melhor opção de refresco em qualquer momento. ",
      category: "Drinks",
      image: "src/assets/products/drinks/1.png",
      price: 4.9,
      rating: 4.8,
    },
    {
      id: 7,
      name: "Pepsi lata 350ml",
      description:
        "A Pepsi Lata 350ml é um refrigerante de cola com aroma natural, apreciada pelo sabor suave e refrescante. ",
      category: "Drinks",
      image: "src/assets/products/drinks/2.png",
      price: 4.8,
      rating: 4.7,
    },
    {
      id: 8,
      name: "Guaraná Antartica 2L",
      description:
        "Uma garrafa de guaraná Antarctica 2 litros pode render diversas possibilidades de drinks para você aproveitar o melhor do verão sem nem precisar sair de casa. ",
      category: "Drinks",
      image: "src/assets/products/drinks/3.png",
      price: 8.5,
      rating: 4,
    },
    {
      id: 9,
      name: "NESCAU prontinho 200ml",
      description: "Uma opção nutritiva e gostosa para seus filhos.",
      category: "Drinks",
      image: "src/assets/products/drinks/4.png",
      price: 2.8,
      rating: 4.4,
    },
    {
      id: 10,
      name: "Croissant",
      description: "O clássico pão francês.",
      category: "Pastry",
      image: "src/assets/products/foods/1.png",
      price: 4.9,
      rating: 4.7,
    },
  ];

  const sectionFilter = products.filter((product) => {
    const name = product.name
      .toLowerCase()
      .includes(filter.toLowerCase().trim());
    const category = product.category === section;
    if (filter !== "") return name;
    else return category;
  });
  console.log(sectionFilter);
  return (
    <div className="flex flex-col gap-4">
      {sectionFilter.map((product) => (
        <div
          key={product.id}
          className="flex gap-4 bg-gray-50 p-2 justify-between"
        >
          <div className="flex gap-4">
            <div className="flex flex-col items-center rounded-full bg-gray-200 relative">
              <img
                className="min-w-[100px] min-h-[100px]"
                src={product.image}
              />
              <div className="flex items-center absolute bottom-0 gap-1 font-medium bg-gray-100 p-1 rounded-2xl shadow-sm">
                {<AiFillStar className="text-yellow-600" />}
                <p>{product.rating}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-700 text-xs">{product.description}</p>
            </div>
          </div>

          <p className="items-center flex text-lg">
            <span className="text-gray-800">R$</span>
            {product.price}0
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemsResult;
