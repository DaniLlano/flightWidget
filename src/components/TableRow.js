import TableCell from './TableCell'

const TableRow = ({ flight }) => {

    const value = Object.values(flight)
    
  return (
    <div className='tableRow'>
        {value?.map((val, _index) => (
            <TableCell key={_index} val={val} />
        ))}
    </div>
  )
}

export default TableRow