import { useState } from "react"

import styles from './Form.module.css'

export function Form(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vicky')

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
            <>
                <h1 style={{color: 'green'}}>{props.title}</h1>
                <h2 className={styles.border}>Name: {name}</h2>
                <input type="text" onChange={handleChange}></input>
                <p>Count: {count}</p>
                <button onClick={handleClick}>Click</button>
            </>
    )
}