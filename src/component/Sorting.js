import React from "react";

const Sorting = ({ handleSort, reset }) => {
  return (
    <>
      <div className="firstname">
        <input type="radio" name="sort" onClick={() => handleSort("name")} />
        <label>Sort by First Name</label>
      </div>
      <div className="lastname">
        <input type="radio" name="sort" onClick={() => handleSort("city")} />
        <label>Sort by City</label>
      </div>
      <div className="reset_btn">
        <button type="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Sorting;
