import { useState, useEffect } from "react"
import TableRow from "./TableRow"

const TableBody = () => {

    const [flights, setFlights] = useState(null)
  
    const getFlights = () => {
        fetch('http://localhost:8000/flights')
            .then(res => res.json())
            .then(flights => setFlights(Object.values(flights.data)))
            .catch(err => console.log(err))
    }

    useEffect(() => getFlights(), [])

    console.log(flights)

    return (
        <div className="tableBody">
            {flights?.map((flight, _index) => (
                <TableRow key={_index} flight={flight} />
            ))}
        </div>
  )
}

export default TableBody