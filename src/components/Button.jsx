/* eslint-disable react/prop-types */
const Button = ({ value, result, setValue, text }) => {
  return (
    <button
      className={
        value === result
          ? "customize-selected-button"
          : "customize-unselected-button"
      }
      onClick={() => setValue(result)}
    >
      {text}
    </button>
  );
};

export default Button;
