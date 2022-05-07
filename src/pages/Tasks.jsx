import { useState } from 'react'
import shortid from 'shortid';
import Layout from '../components/layout/Layout'
import CreateTask from '../components/Tasks/CreateTask';
import ShowTasks from '../components/Tasks/ShowTasks';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [visibility, setVisibility] = useState('all')

    const addNewTask = (text) => {
        // console.log('text calling from addNewTask');
        // console.log(text);
        const task = {
            text,
            isCompleted: false,
            createdAt: new Date(),
            id: shortid.generate()
        }
        // console.log(task);
        setTasks([task, ...tasks])
    }
    return (
        <Layout>
            <h1>Tasks</h1>
            <CreateTask addNewTask={addNewTask} />
            <ShowTasks tasks={tasks} />
        </Layout>
    )
}

export default Tasks