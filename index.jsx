import React, {useState} from "react";
import {createRoot} from "react-dom/client"

function Wishlist({items, count}) {
    return (
        <>
            <ul>{items.map((item, i) => (
                <li key={`${item}-${i}`}>{item}</li>
            ))}</ul>
            <p>The count is {count}</p>
        </>

    )
}

function App({amount, items}) {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>Current count is {count}</div>
            <div>dfsfds</div>
            <button onClick={() => setCount(count+amount)}>Add</button>
            <button onClick={() => setCount(count-amount)}>Sub</button>
            <Wishlist items={items} count={count}/>
        </>
    )
}
const el = document.getElementById("app")
const app = createRoot(el)
app.render(<App amount={2} items={["madden", "legos", "gamecube"]}/>);