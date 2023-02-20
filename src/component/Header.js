import React from "react";

const Header = ({header}) => {
  return (
    <>
      <tr>
        {header.map((item, index) => {
          return <th key={index}>{item}</th>;
        })}
      </tr>
    </>
  );
};

export default Header;
