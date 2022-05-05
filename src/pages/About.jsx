import { useState } from 'react'
import Buttons from '../components/buttons/Buttons'
import DisplayCount from '../components/displayCount/DisplayCount'
import Layout from '../components/layout/Layout'
import UpdateIncDec from '../components/updateIncDec/UpdateIncDec'

const About = () => {
    const [count, setCount] = useState(0) //useState return an Array
    const [incrementValue, setIncrementValue] = useState(10)
    const [decrementValue, setDecrementValue] = useState(5)

    function increment() {
        setCount(count + incrementValue)
    }
    function decrement() {
        setCount(count - decrementValue)
    }

    function handleIncrementChange(e) {
        setIncrementValue(parseInt(e.target.value))
    }
    function handleDecrementChange(e) {
        setDecrementValue(parseInt(e.target.value))
    }
    return (
        <Layout>
            <h1>This is About page</h1>
            <DisplayCount count={count} />
            <UpdateIncDec
                incrementValue={incrementValue}
                decrementValue={decrementValue}
                handleIncrementChange={handleIncrementChange} handleDecrementChange={handleDecrementChange}
            />
            <Buttons
                increment={increment}
                decrement={decrement}
            />
        </Layout>
    )
}

export default About