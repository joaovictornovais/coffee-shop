/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { products } from "../db/Products";
import { Link } from "react-router-dom";

const ItemsResult = ({ section, filter, filterButton, filterPrice }) => {
  const inputFilter = products.filter((product) => {
    const name = product.name
      .toLowerCase()
      .includes(filter.toLowerCase().trim());
    const category = product.category === section;
    if (filter !== "") return name;
    else return category;
  });

  const priceResult = inputFilter.slice().sort((priceA, priceB) => {
    if (filterPrice === "up") {
      return priceA.price - priceB.price;
    } else if (filterPrice === "down") {
      return priceB.price - priceA.price;
    } else {
      return 0;
    }
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
        <Link to={`/products/${product.id}`} key={product.id}>
          <div className="flex gap-4 bg-gray-50 p-2 justify-between border-b-2 rounded-xl">
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
                R${product.price.toFixed(2).toString().replace(".", ",")}
              </p>
              <p
                className={
                  !product.isPromotion
                    ? "items-center flex"
                    : "items-center flex text-gray-500 line-through"
                }
              >
                R${product.oldPrice.toFixed(2).toString().replace(".", ",")}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemsResult;
