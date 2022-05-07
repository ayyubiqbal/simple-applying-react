import React, { useState } from 'react'

const CreateTask = ({ addNewTask }) => {
    const [text, setText] = useState('simple task 1')

    return (
        <div>
            <input type="text"
                placeholder='type your task'
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button onClick={() => {
                if (text) {
                    addNewTask(text)
                    setText('')
                } else {
                    alert('invalid text')
                }
            }}>Create Task</button>
        </div>
    )
}

export default CreateTask