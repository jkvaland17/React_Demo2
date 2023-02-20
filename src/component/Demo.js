import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import PagePagination from "./Pagination";
import Data from "../component/Data.json";

const Demo = () => {
  const [data, setData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(10);
  const [page, setPage] = useState();
  useEffect(() => {
    setData(Data);
  }, []);

  const handleSort = (key) => {
    setData([...data].sort((a, b) => a[key].localeCompare(b[key])));
  };

  const reset = () => {
    window.location.reload();
  };
  const changeOption = (e) => {
    const pageValue = Number(e.target.value);
    setShowPerPage(pageValue);
  };
  const filteredData = data.slice(page * showPerPage, (page + 1) * showPerPage);
  const header = ["No", "First Name", "Last Name", "Post", "City"];
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
              {header.map((item, index) => {
                return <th key={index}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody className="contain">
            {filteredData.map(({ id, name, lastname, post, city }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{lastname}</td>
                <td>{post}</td>
                <td>{city}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="main_pagination">
        <PagePagination
          showPerPage={showPerPage}
          onPagination={(start, end) => setPage(start / showPerPage)}
          total={data.length}
          page={page}
          setPage={setPage}
        />
        <div className="option_btn">
          Page :
          <select onChange={changeOption}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Demo;
