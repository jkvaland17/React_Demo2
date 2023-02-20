import React from 'react'

const OptionData = ({changeOption}) => {
  return (
    <>
      Page :
          <select onChange={changeOption}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
    </>
  )
}

export default OptionData
