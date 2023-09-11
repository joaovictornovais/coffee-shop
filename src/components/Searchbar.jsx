import { BiSearch, BiBell } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const Searchbar = ({ searchToFilters }) => {
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
      <BiBell size={24} className="text-[#5D4037]" />
    </div>
  );
};

export default Searchbar;
