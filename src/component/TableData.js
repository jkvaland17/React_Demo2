import React from 'react'

const Table = ({filteredData}) => {
  return (
    <>
    {filteredData.map(({ id, name, lastname, post, city }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{lastname}</td>
                <td>{post}</td>
                <td>{city}</td>
              </tr>
            ))}
      
    </>
  )
}

export default Table
