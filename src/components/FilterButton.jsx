// eslint-disable-next-line react/prop-types
const FilterButton = ({ icon, filter, isActive }) => {
  return (
    <button
      className={
        isActive
          ? "filter-button text-gray-100 bg-brown-700 "
          : "filter-button text-gray-900 bg-gray-300 "
      }
    >
      {icon}
      <p>{filter}</p>
    </button>
  );
};

export default FilterButton;
