import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const NavigationMenu = ({ link, title }) => {
  return (
    <div className="flex gap-6 items-center">
      <Link to={link}>
        <AiOutlineArrowLeft />
      </Link>
      <h2>{title}</h2>
    </div>
  );
};

export default NavigationMenu;
