/* eslint-disable react/prop-types */
import ItemsResult from "./ItemsResult";

import { useState } from "react";

import {
  AiOutlineStar,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const Filters = ({ searchToFilters }) => {
  const [section, setSection] = useState("Coffee");
  const [filterButton, setFilterButton] = useState([]);
  const [filterPrice, setFilterPrice] = useState("position");

  const toggleFilters = (filter) => {
    if (filterButton.includes(filter))
      setFilterButton(filterButton.filter((n) => n !== filter));
    else setFilterButton([...filterButton, filter]);
  };

  const toggleFilterPrice = () => {
    if (filterPrice === "position") setFilterPrice("up");
    else if (filterPrice === "up") setFilterPrice("down");
    else setFilterPrice("position");
  };

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
        <button
          className={
            filterButton.includes("Rating 4.5+")
              ? "filter-button bg-brown-800 text-gray-100"
              : "filter-button bg-gray-200 text-brown-800"
          }
          onClick={() => toggleFilters("Rating 4.5+")}
        >
          <AiOutlineStar />
          <p>Rating 4.5+</p>
        </button>
        <button
          className={
            filterButton.includes("Promotions")
              ? "filter-button bg-brown-800 text-gray-100"
              : "filter-button bg-gray-200 text-brown-800"
          }
          onClick={() => toggleFilters("Promotions")}
        >
          <HiOutlineSpeakerphone />
          <p>Promoções</p>
        </button>
        <button
          className={
            filterPrice === "position"
              ? "filter-button bg-gray-200"
              : "filter-button bg-brown-800 text-gray-200"
          }
          onClick={toggleFilterPrice}
        >
          <MdAttachMoney />
          <p>Preço</p>
          {filterPrice === "position" ? (
            ""
          ) : filterPrice === "up" ? (
            <AiOutlineArrowUp />
          ) : (
            <AiOutlineArrowDown />
          )}
        </button>
      </div>
      <ItemsResult
        section={section}
        filter={searchToFilters}
        filterButton={filterButton}
        filterPrice={filterPrice}
      />
    </div>
  );
};

export default Filters;
