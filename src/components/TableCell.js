import React from 'react'

const TableCell = ({ val }) => {
  return (
    <div className='tableCell'>
        {Array.from(val).map((char, _index) =>(
            <p>
                {char}
            </p>
        ))}
    </div>
  )
}

export default TableCell