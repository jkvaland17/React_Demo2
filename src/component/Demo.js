import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import PagePagination from "./Pagination";
import Data from "../component/Data.json";
import TableData from "../component/TableData";
import Header from "../component/Header";
import Sorting from "./Sorting";
import OptionData from "./OptionData";

const Demo = () => {
  const [data, setData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(10);
  const [page, setPage] = useState();

  useEffect(() => {
    setData(Data);
  }, []);
  console.log(page);

  const SortBy = () => {
    "name";
    "city";
  };
  const handleSort = (key) => {
    SortBy(key);
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
        <Sorting handleSort={handleSort} reset={reset} />
        <Table>
          <Header header={header} />
          <TableData filteredData={filteredData} />
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
        <OptionData changeOption={changeOption} />
      </div>
    </>
  );
};

export default Demo;
