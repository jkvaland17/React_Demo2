import React from "react";

const FilterValue = (props) => {
  const changeoptionpage = (e) => {
    props.onFilterValueSelected(e.target.value);
  };
  return (
    <>
      <select onChange={changeoptionpage}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
    </>
  );
};

export default FilterValue;
