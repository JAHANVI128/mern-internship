import React from "react";

export const UserList = (props) => {
  console.log("user list ....", props);

  var userObj = {
    id:4,
    name:"Rohan",
    age:20
  }

  return (
    <div>
      <h3>User List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td><button className="btn btn-danger" onClick={() => props.delete(user.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => {props.add(userObj)}}>ADD</button>
    </div>
  );
};
