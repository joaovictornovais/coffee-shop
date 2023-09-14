import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const NavigationMenu = ({ link, title, css, arrow }) => {
  return (
    <div className={`flex gap-6 items-center ${css}`}>
      <Link to={link}>
        {arrow === undefined ? <AiOutlineArrowLeft /> : arrow}
      </Link>
      <h2>{title}</h2>
    </div>
  );
};

export default NavigationMenu;
