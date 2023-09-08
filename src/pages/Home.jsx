import Searchbar from "../components/Searchbar";
import Promotions from "../components/Promotions";
import Filters from "../components/Filters";

const Home = () => {
  return (
    <div className="p-4 container mx-auto space-y-4">
      <Searchbar />
      <Promotions />
      <Filters />
    </div>
  );
};

export default Home;
