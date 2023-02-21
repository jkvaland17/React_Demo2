import React from "react";
import { Table } from "react-bootstrap";
const Header = ({header}) => {
  return (
    <>
    <Table>
    <thead>
      <tr>
        {header.map((item, index) => {
          return <th key={index}>{item}</th>;
        })}
      </tr>
      </thead>
      </Table>
    </>
  );
};

export default Header;
