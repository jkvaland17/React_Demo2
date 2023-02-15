import React from "react";
import { Table } from "react-bootstrap";
import DataTable from "./DataTable";
import { headerdata } from "../component/Data";

const Header = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            {headerdata.map((val, index) => {
              return <th key={index}>{val} <span>^</span></th>;
            })}
          </tr>
        </thead>
        <DataTable />
      </Table>
    </>
  );
};

export default Header;
