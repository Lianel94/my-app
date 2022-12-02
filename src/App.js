import { useState } from "react"
import { Form } from "./components/classes/Form"
import { Form as FormFunc } from "./components/func/Form"

export function App() {
    const [toggle, setToggle] = useState(true)
    const [arr, setArr] = useState([{name: 'SpongeBob'}, {name: 'Patrick'}, {name: 'Squidward'}, {name: 'Sandy'}])
    return (
        <div>
            <h1>Hello World</h1>
            <Form />
            <hr />
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>
            {toggle && <FormFunc title='Functional Component!!!' />}
            <ul>
                {arr.map((item, index) => (
                    <li details={item} key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}



// export default App