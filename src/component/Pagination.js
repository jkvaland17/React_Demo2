import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPagination, total }) => {
  const [counter, setcounter] = useState(1);
  useEffect(() => {
    const value = showPerPage * counter;
    onPagination(value - showPerPage, value);
    // eslint-disable-next-line
  }, [counter]);

  const previous = () => {
    counter === 1 ? setcounter(1) : setcounter(counter - 1);
  };
  const next = () => {
    Math.ceil(total / showPerPage) === counter
      ? setcounter(counter)
      : setcounter(counter + 1);
  };
  //

  return (
    <div className="row_filter">
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Pagination;
