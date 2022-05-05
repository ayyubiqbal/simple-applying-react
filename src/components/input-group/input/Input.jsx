import React from 'react'

const Input = (props) => {
    const { label, type } = props;
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 3rem",
            fontSize: "20px",
            marginBottom: "8px"
            // fontWeight: "bold"
        }}>
            <label htmlFor="name">What is Your {label}</label>
            <input type={type} style={{
                padding: "0.5rem"
            }} />
        </div>
    )
}

export default Input