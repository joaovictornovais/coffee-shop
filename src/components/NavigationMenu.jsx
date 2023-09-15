/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const NavigationMenu = ({ link, title, css, arrow }) => {
  return (
    <Link to={link}>
      <div className={`flex gap-6 items-center ${css}`}>
        {arrow === undefined ? <AiOutlineArrowLeft /> : arrow}

        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default NavigationMenu;
