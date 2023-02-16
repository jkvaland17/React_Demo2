import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Pagination from "./Pagination";

const TableData = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [showPerPage, setshowPerPage] = useState(10);

  //pagination start
  const [pagination, setpagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPagination = (start, end) => {
    setpagination({ start: start, end: end });
  };
  //pagination end

  const header = ["No", "First Name", "Last Name", "Post", "City"];
  useEffect(() => {
    const respons = `https://63da3a9b19fffcd620c3dd70.mockapi.io/User`;
    fetch(respons)
      .then((res) => res.json())
      .then((user) => {
        setData(user);
      });
  }, []);

  const SortBy = () => {
    "name";
    "city";
  };
  const handleSort = (e) => {
    SortBy(e);
    setData((prevData) =>
      [...prevData].sort((a, b) => a[e].localeCompare(b[e]))
    );
  };
  const reset = () => {
    window.location.reload(false);
  };

  return (
    <>
      <div className="table_data">
        <div className="table_functionality">
          <div className="firstname">
            <input
              type="radio"
              name="sort"
              onClick={() => handleSort("name")}
            />
            <label>Sort by First Name</label>
          </div>
          <div className="lastname">
            <input
              type="radio"
              name="sort"
              onClick={() => handleSort("city")}
            />
            <label>Sort by City</label>
          </div>
          <div className="reset_btn">
            <button type="reset" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              {header.map((data, index) => {
                return <th key={index}>{data}</th>;
              })}
            </tr>
          </thead>
          <tbody className="contain">
            {data.slice(pagination.start, pagination.end).map((item) => {
              const { id, name, lastname, post, city } = item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{lastname}</td>
                  <td>{post}</td>
                  <td>{city}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Pagination showPerPage={showPerPage} onPagination={onPagination} />
    </>
  );
};

export default TableData;
