import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const PagePagination = ({
  showPerPage,
  onPagination,
  total,
  page,
  setPage,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [counter, setcounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(total / showPerPage);

  useEffect(() => {
    const value = showPerPage * counter;
    onPagination(value - showPerPage, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  const previous = () => {
    page === 0 ? setPage(0) : setPage(page - 1);
  };
  const next = () => {
    total / showPerPage === page ? setPage(page) : setPage(page + 1);
    console.log(page);
  };
  //console.log(total /showPerPage);
  return (
    <div className="row_filter">
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next
          onClick={next}
          disabled={total / showPerPage === page}
        />
      </Pagination>
    </div>
  );
};

export default PagePagination;
