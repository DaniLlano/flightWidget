import TableCell from './TableCell'

const TableRow = ({ flight }) => {

    const value = Object.values(flight)
    
  return (
    <div className='tableRow'>
        {value?.map((val, index) => (
            <TableCell key={index} val={val} />
        ))}
    </div>
  )
}

export default TableRow