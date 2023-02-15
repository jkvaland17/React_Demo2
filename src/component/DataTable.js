import React, { useState, useEffect } from "react";

const DataTable = () => {
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://63da3a9b19fffcd620c3dd70.mockapi.io/User"
    );
    const data = await response.json();
    return setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
        {user.map((data, index) => {
          const { id, name, lastname, post, city } = data;
          return (
            <tbody key={index}>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{lastname}</td>
                <td>{post}</td>
                <td>{city}</td>
              </tr>
            </tbody>
          );
        })}
    </>
  );
};

export default DataTable;
