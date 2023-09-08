import Searchbar from "../components/Searchbar";
import Promotions from "../components/Promotions";
import Filters from "../components/Filters";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState("");

  const searchToFilters = (search) => {
    setData(search);
  };

  return (
    <div className="p-4 container mx-auto space-y-4">
      <Searchbar searchToFilters={searchToFilters} />
      <Promotions searchToFilters={data} />
      <Filters searchToFilters={data} />
    </div>
  );
};

export default Home;
