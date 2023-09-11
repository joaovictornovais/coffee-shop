/* eslint-disable react/prop-types */
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
      <div className="grid grid-cols-3 text-center text">
        <div
          onClick={() => setSection("Coffee")}
          className={
            section === "Coffee" || searchToFilters !== ""
              ? "selected-section"
              : "unselected-section"
          }
        >
          <p>Café</p>
          <div
            className={
              section === "Coffee" || searchToFilters !== ""
                ? "selected-section-border"
                : "unselected-section-border"
            }
          />
        </div>
        <div
          onClick={() => setSection("Drinks")}
          className={
            section === "Drinks" || searchToFilters !== ""
              ? "selected-section"
              : "unselected-section"
          }
        >
          <p>Bebidas</p>
          <div
            className={
              section === "Drinks" || searchToFilters !== ""
                ? "selected-section-border"
                : "unselected-section-border"
            }
          />
        </div>
        <div
          onClick={() => setSection("Pastry")}
          className={
            section === "Pastry" || searchToFilters !== ""
              ? "selected-section"
              : "unselected-section"
          }
        >
          <p>Pastelaria</p>
          <div
            className={
              section === "Pastry" || searchToFilters !== ""
                ? "selected-section-border"
                : "unselected-section-border"
            }
          />
        </div>
      </div>
      <div className="flex gap-1">
        <FilterButton
          icon={<AiOutlineStar />}
          filter={"Rating 4.5+"}
          isActive={true}
        />
        <FilterButton
          icon={<MdAttachMoney />}
          filter={"Preço"}
          isActive={true}
        />
        <FilterButton
          icon={<HiOutlineSpeakerphone />}
          filter={"Promoções"}
          isActive={false}
        />
      </div>
      <ItemsResult section={section} filter={searchToFilters} />
    </div>
  );
};

export default Filters;
