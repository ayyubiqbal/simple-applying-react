import React from 'react'

const Section = (props) => {
    const { title, texts } = props;
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {texts.map(text => <li>{text}</li>)}
            </ul>
        </div>
    )
}

export default Section