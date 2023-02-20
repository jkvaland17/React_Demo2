import React from "react";

const Header = ({header}) => {
  return (
    <>
    <thead>
      <tr>
        {header.map((item, index) => {
          return <th key={index}>{item}</th>;
        })}
      </tr>
      </thead>
    </>
  );
};

export default Header;
