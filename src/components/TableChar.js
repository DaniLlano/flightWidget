import { useState } from 'react'

const TableChar = ({ char, index }) => {

    const [flip, setFlip] = useState(false)

    setTimeout(() => {
        setFlip(true)
    }, 100 * index)

    return (
        <p className={flip ? 'flip' : null} key={index}>
            {flip ? char : null}
        </p>
    )
}

export default TableChar