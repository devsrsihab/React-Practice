import { useState } from "react";

const User = ({ users, setUsers }) => {
  // filter state
  const [filtered, setFiltered] = useState(false);
  // tooggle handiler
  const toggleHandler = () => {
    setFiltered(!filtered);
  };

  //   order by
  const orderByHandler = () => {
    toggleHandler();
    const acendingOrder = [...users].sort((a, b) =>
      a.firstname.localeCompare(b.firstname)
    );
    const decendingOrder = [...users].sort((a, b) =>
      b.firstname.localeCompare(a.firstname)
    );

    console.log(filtered);
    filtered ? setUsers(acendingOrder) : setUsers(decendingOrder);
  };
  //   delete user
  const deleteUserHanlder = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <>
      <div className="overflow-x-auto bg-white text-black w-5/6 m-auto">
        <table className="table">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>Name</th>
              <th>Adress</th>
              <th>Delete</th>
              <th onClick={orderByHandler}>
                <button className="btn btn-primary">Order by</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users &&
              users.map((user) => (
                <tr key={user?.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold"> {user?.firstname} </div>
                        <div className="text-sm opacity-50">
                          {" "}
                          {user?.email}{" "}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user?.phone}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user?.website}
                    </span>
                  </td>
                  <th>
                    <button
                      onClick={() => deleteUserHanlder(user.id)}
                      className="btn btn-error text-white"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
          {/* foot */}
          <tfoot className="text-black">
            <tr>
              <th>Name</th>
              <th>Adress</th>
              <th>Delete</th>
              <th>Order By</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default User;
