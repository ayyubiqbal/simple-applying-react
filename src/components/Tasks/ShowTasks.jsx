import React from 'react'

const ShowTasks = ({ tasks }) => {
    return (
        <>
            {
                tasks.length > 0 ? (<ul>
                    {tasks.map((task) => <li key={task.id}>{task.text}</li>)}
                </ul>) :
                    (<p>No task found</p>)
            }
        </>
    )
}

export default ShowTasks