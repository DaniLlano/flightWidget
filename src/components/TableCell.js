import TableChar from './TableChar'

const TableCell = ({ val }) => {
  return (
    <div className='tableCell'>
        {Array.from(val).map((char, index) => (
            <TableChar key={index} char={char} index={index} />
        ))}
    </div>
  )
}

export default TableCell