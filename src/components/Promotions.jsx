/* eslint-disable react/prop-types */
import { Carousel } from "@material-tailwind/react";

const Promotions = ({ searchToFilters }) => {
  const promotions = [
    {
      id: 1,
      img: "src/assets/promotions/promo-1.svg",
    },
    {
      id: 2,
      img: "src/assets/promotions/promo-2.svg",
    },
    {
      id: 3,
      img: "src/assets/promotions/promo-3.svg",
    },
  ];

  return (
    <Carousel
      className={searchToFilters !== "" ? "hidden" : "rounded-xl"}
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
