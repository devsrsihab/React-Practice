import { useEffect, useState } from "react"
import User from "./User"

export default function Users(){
    // make a state
    const [users, setUsers] = useState([])
    // make userEffect
    useEffect( ()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    },[] )

    // css style
    const userStyles = {
        border: "1px solid yellow",
        borderRadius: "10px",
        margin: "10px 0px",
        padding: "50px"
    }
    

    return (
        <div className="user" style={userStyles} >
            <h3>Users: {users.length}</h3>
            {
                users.map(user => <User key={user.id} user={user} ></User> )
            }
        </div>
    )
}

// steps to done this project
// 1. create a state
// 2. make useEffect with dependencies array
// 3. user fetch to get data
// 4. set loaded data to jsx