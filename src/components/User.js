import { useState } from "react";

const User = (props) => {
    let [count, setCount] = useState(0);
    let count2 = useState(1);
    return (
        <div className="user-card">
            <h1>{props.name}</h1>
            <p>{count}</p>
            <p>{count2}</p>
            <button onClick={() => setCount(++count)}>{count}</button>
            <h2>Ballia</h2>
            <h3>Contact : KSG06</h3>
        </div>
    )
};

export default User;