import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const DataTable = ({ column }) => {
  const [user, setUser] = useState([]);
  //sorting data start
  const [sorting, setSorting] = useState({
    column: "First Name",
    order: "asc",
  });
  let columns = ["No", "First Name", "Last Name", "Post", "City"];
  const isDescSorting = sorting.column === column && sorting.order === "desc";
  const isAscSorting = sorting.column === column && sorting.order === "asc";
  const futureSortingOrder = isDescSorting ? "asc" : "desc";
  const sortTable = (newSorting) => {
    setSorting(newSorting);
    console.log("Sorting");
  };
  //sorting data end

  //fatch api data start
  useEffect(() => {
    const respons = `https://63da3a9b19fffcd620c3dd70.mockapi.io/User?_sort=${sorting.column}&_order=${sorting.order}`;
    fetch(respons)
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  }, [sorting]);
  //fatch api data end

  return (
    <>
      <Table>
        <thead>
          <tr>
            {columns.map((column, index) => {
              return (
                <th
                  className="header"
                  key={index}
                  onClick={() =>
                    sortTable({ column, order: futureSortingOrder })
                  }
                >
                  {column}
                  {isDescSorting && <span>▼</span>}
                  {isAscSorting && <span>▲</span>}
                </th>
              );
            })}
          </tr>
        </thead>
        {user.map((column) => {
          const { id, name, lastname, post, city } = column;
          return (
            <tbody key={column.id}>
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
      </Table>
    </>
  );
};

export default DataTable;
