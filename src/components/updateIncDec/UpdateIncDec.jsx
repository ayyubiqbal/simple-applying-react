import React from 'react'

const UpdateIncDec = ({ incrementValue, decrementValue, handleIncrementChange, handleDecrementChange }) => {
    return (
        <div>
            <label>Koto Kore Increment</label>
            <input type="number" value={incrementValue}
                onChange={handleIncrementChange} />
            <label>Koto Kore Decrement</label>
            <input type="number" value={decrementValue}
                onChange={handleDecrementChange} />
        </div>
    )
}

export default UpdateIncDec