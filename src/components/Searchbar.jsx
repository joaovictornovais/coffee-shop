import { BiSearch, BiBell } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center border-2 border-[#af6c58] p-2 rounded-2xl w-[90%] justify-between">
        <input
          className="w-[100%] outline-none p-1 text-sm"
          placeholder="O que você gostaria de beber hoje?"
        />
        <BiSearch size={24} className="text-[#af6c58]" />
      </div>
      <BiBell size={24} className="text-[#5D4037]" />
    </div>
  );
};

export default Searchbar;
