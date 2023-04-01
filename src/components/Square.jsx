import React from 'react'
// import { useState } from 'react';

const Square = ({value, onSquareClick}) => {
    // const [value, setvalue] = useState(null)
    // function handleClick() {
    //     setvalue('X')

    // }
    return (
        <button className='square' onClick={onSquareClick}>{value}</button>
    )
}

export default Square