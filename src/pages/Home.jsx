/* eslint-disable react/prop-types */
import Promotions from "../components/Promotions";
import Filters from "../components/Filters";
import { useState } from "react";

const Home = ({ data }) => {
  const [query, setQuery] = useState("");

  const buttonFilter = (button) => {
    setQuery(button);
  };

  return (
    <>
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
