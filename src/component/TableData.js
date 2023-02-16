import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const TableData = () => {
  const [data, setData] = useState([]);
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
            {data.map((item) => {
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
      <div className="row_filter">
        Page:
        <select>
          <option defaultValue="ALL">ALL</option>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </div>
    </>
  );
};

export default TableData;
