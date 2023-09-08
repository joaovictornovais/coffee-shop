import { Carousel } from "@material-tailwind/react";

const Promotions = () => {
  return (
    <Carousel
      className="rounded-xl"
      transition={{ duration: 1 }}
      autoplay={true}
      loop={true}
    >
      <img
        src="src/assets/promotions/promo-1.svg"
        className="h-full w-full object-cover"
      />
      <img
        src="src/assets/promotions/promo-2.svg"
        className="h-full w-full object-cover"
      />
      <img
        src="src/assets/promotions/promo-3.svg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default Promotions;
