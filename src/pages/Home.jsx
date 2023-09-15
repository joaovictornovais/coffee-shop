/* eslint-disable react/prop-types */
import Promotions from "../components/Promotions";
import Filters from "../components/Filters";
import { useState } from "react";
import Searchbar from "../components/Searchbar";

const Home = ({ cart }) => {
  const [query, setQuery] = useState("");

  const [data, setData] = useState("");

  const searchToFilters = (search) => {
    setData(search);
  };

  const buttonFilter = (button) => {
    setQuery(button);
  };

  return (
    <>
      <Searchbar cart={cart} searchToFilters={searchToFilters} />
      <Promotions searchToFilters={data} />
      <Filters
        searchToFilters={data}
        buttonFilter={buttonFilter}
        query={query}
      />
    </>
  );
};

export default Home;
