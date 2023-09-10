// eslint-disable-next-line react/prop-types
const FilterButton = ({ icon, filter, isActive }) => {
  return (
    <button className={isActive ? "bg-gray-800 text-gray-50 p-2 rounded-2xl text-sm font-medium flex gap-1 items-center" : "bg-gray-200 p-2 rounded-2xl text-sm font-medium flex gap-1 items-center"}>
      {icon}
      <p>{filter}</p>
    </button>
  );
};

export default FilterButton;
