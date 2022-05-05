import React from 'react'

const Buttons = ({ increment, decrement }) => {
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default Buttons