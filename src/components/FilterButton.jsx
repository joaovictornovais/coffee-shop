// eslint-disable-next-line react/prop-types
const FilterButton = ({ icon, filter }) => {
  return (
    <button className="bg-gray-100 p-2 rounded-2xl text-sm font-medium flex gap-1 items-center">
      {icon}
      <p>{filter}</p>
    </button>
  );
};

export default FilterButton;
