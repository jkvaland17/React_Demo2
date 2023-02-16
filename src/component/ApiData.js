import React, { useState, useEffect } from "react";

const ApiData = () => {
  const [data, setData] = useState([]);

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
      <div>
        <input type="radio" name="sort" onClick={() => handleSort("name")} />
        <label>Sort by First Name</label>
        <br />
        <input type="radio" name="sort" onClick={() => handleSort("city")} />
        <label>Sort by City</label>
        <br />
        <button type="reset" onClick={reset}>
          Reset
        </button>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Post</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
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
        </table>
      </div>
    </>
  );
};

export default ApiData;
