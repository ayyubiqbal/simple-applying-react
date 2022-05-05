import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'

const Help = () => {

    const [state, setState] = useState({ name: "" })
    useEffect(() => {
        setTimeout(() => {
            setState({ name: "Ayyub Iqbal" })
            console.log('name changed');
        }, 3000);
        console.log('Rendering');
    }, [])


    const [name, setName] = useState("")
    const data = [
        {
            name: "Ayyub Iqbal",
            email: "ayyub@gmail.com",
        },
        {
            name: "Muhammad Iqbal",
            email: "muhammad@gmail.com",
        },
        {
            name: "Sorif Iqbal",
            email: "sorif@gmail.com",
        },
        {
            name: "Kawsar Iqbal",
            email: "kawsar@gmail.com",
        },
    ]
    // const data = []
    // console.log(data.length);
    return (
        <Layout>
            {
                state.name ? (<h1>Hello {state.name}, This is Help page</h1>) :
                    (<h1>Hello Guest, This is Help page</h1>)
            }

            {
                data.length > 0 ?
                    <ul>
                        {data.map((value) => <li>{value.name}, {value.email} </li>)}
                    </ul> :
                    <p>There is no data</p>

            }
        </Layout>
    )
}

export default Help