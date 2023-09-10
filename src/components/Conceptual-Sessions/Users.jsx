import { useState, useEffect } from "react";
import User from "./User";

const Users = () => {
  //  define a state
  const [users, setUsers] = useState([]);
  //  define a sideEffect
  useEffect(() => {
    const userData = async () => {
      try {
        const URL = `https://jsonplaceholder.org/users`;
        const res = await fetch(URL);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    userData();
  }, []);

  return (
    <>
      <User users={users} setUsers={setUsers}></User>
    </>
  );
};

export default Users;
