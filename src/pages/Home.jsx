import Searchbar from "../components/Searchbar";
import Promotions from "../components/Promotions";
import Filters from "../components/Filters";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");

  const searchToFilters = (search) => {
    setData(search);
  };

  const buttonFilter = (button) => {
    setQuery(button);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <Searchbar searchToFilters={searchToFilters} />
      <Promotions searchToFilters={data} />
      <Filters
        searchToFilters={data}
        buttonFilter={buttonFilter}
        query={query}
      />
    </div>
  );
};

export default Home;
