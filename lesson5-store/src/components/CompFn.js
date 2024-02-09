import { useState } from "react";

const CompFn = () => {

    let [money, setMoney] = useState(0);
    let [name, setName] = useState("");

    let [users, setUser] = useState({});

    let handle = () => setMoney(money + 1)

    return (
        <div>
            {/* { money }
            <input onInput={(event) => setName(event.target.value)} value={name}></input>
            <button onClick={() => setMoney(money + 1)}>
                +
            </button>
            {name} */}
            <input onInput={(event) => setUser({...users, login: event.target.value})}></input>

            <input onInput={(event) => setUser({...users, name: event.target.value})}></input>
            <button onClick={() => {console.log(users)}}>
                +
            </button>
        </div>
    )
}

export default CompFn;