import FilterButton from "./FilterButton";
import { AiOutlineStar } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import ItemsResult from "./ItemsResult";
import { useState } from "react";

const Filters = ({ searchToFilters }) => {
  const [section, setSection] = useState("Coffee");

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 text-center text-xl">
        <div
          onClick={() => setSection("Coffee")}
          className={
            section === "Coffee"
              ? "space-y-2 text-brown-800"
              : "space-y-2 text-brown-200"
          }
        >
          <p>Café</p>
          <div
            className={
              section === "Coffee"
                ? "border-[2px] border-brown-800"
                : "border-[2px] border-brown-200"
            }
          />
        </div>
        <div
          onClick={() => setSection("Drinks")}
          className={
            section === "Drinks"
              ? "space-y-2 text-brown-800"
              : "space-y-2 text-brown-200"
          }
        >
          <p>Bebidas</p>
          <div
            className={
              section === "Drinks"
                ? "border-[2px] border-brown-800"
                : "border-[2px] border-brown-200"
            }
          />
        </div>
        <div
          onClick={() => setSection("Pastry")}
          className={
            section === "Pastry"
              ? "space-y-2 text-brown-800"
              : "space-y-2 text-brown-200"
          }
        >
          <p>Pastelaria</p>
          <div
            className={
              section === "Pastry"
                ? "border-[2px] border-brown-800"
                : "border-[2px] border-brown-200"
            }
          />
        </div>
      </div>
      <div className="flex gap-1">
        <FilterButton icon={<AiOutlineStar />} filter={"Rating 4.5+"} />
        <FilterButton icon={<MdAttachMoney />} filter={"Preço"} />
        <FilterButton icon={<HiOutlineSpeakerphone />} filter={"Promoções"} />
      </div>
      <ItemsResult section={section} filter={searchToFilters} />
    </div>
  );
};

export default Filters;
