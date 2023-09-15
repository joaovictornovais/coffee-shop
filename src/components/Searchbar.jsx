/* eslint-disable react/prop-types */
import { BiSearch, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Searchbar = ({ searchToFilters, cart }) => {
  const count = cart.reduce((counter, obj) => {
    if (obj.productId !== 0) return (counter += 1);
  }, 0);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center border-2 border-brown-300 p-2 rounded-2xl w-[90%] justify-between">
        <input
          onChange={(e) => searchToFilters(e.target.value)}
          className="w-[100%] outline-none p-1 text-sm bg-gray-50"
          placeholder="O que você gostaria de beber?"
        />
        <BiSearch size={24} className="text-brown-300" />
      </div>
      <Link to="/checkout" className="relative">
        <BiCart size={30} className="text-brown-600" />
        <span
          className={
            count !== 0
              ? "absolute top-[-5px] left-5 bg-brown-600 text-white rounded-full text-center w-5 h-5 flex items-center justify-center font-medium text-xs"
              : "hidden"
          }
        >
          {count}
        </span>
      </Link>
    </div>
  );
};

export default Searchbar;
