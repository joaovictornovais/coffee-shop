/* eslint-disable react/prop-types */
import { Carousel } from "@material-tailwind/react";
import { promotions } from "../db/Promotions";
const Promotions = ({ searchToFilters }) => {
  return (
    <Carousel
      className={
        searchToFilters !== "" ? "hidden" : "rounded-xl w-[100%] mx-auto"
      }
      transition={{ duration: 1 }}
      autoplay={true}
      loop={true}
    >
      {promotions.map((promotion) => (
        <img key={promotion.id} src={promotion.img} className="promotion-img" />
      ))}
    </Carousel>
  );
};

export default Promotions;
