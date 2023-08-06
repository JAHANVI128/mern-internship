import React, { useState } from "react";
import { UserList } from "./UserList";
import { UserRegistration } from "./UserRegistration";

export const UserComponent = (props) => {
  const test = (user) => {
    // alert("test => "+name)

    alert("test method called...");
    console.log("test method called", user);
  };

  const deleteUser = (id) => {
    console.log("user deleted...", id);
    users = users.filter((user) => {
      return user.id != id;
    });

    setusers(users)
    console.log("after delete...", users);
  };

  const addUser = (user) => {
    console.log("add user called...",user)

    users = [...users,user]
    setusers(users)
  }

  console.log(props);

  //   var users = [{
  //     id: 1,
  //     name:"Mahima",
  //     age:23
  //   },{
  //     id :2,
  //     name:"Jenil",
  //     age:25
  //   },
  // {
  //   id : 3,
  //   name: "Dixen",
  //   age:26
  // }]

  var [users, setusers] = useState([
    {
      id: 1,
      name: "Mahima",
      age: 23,
    },
    {
      id: 2,
      name: "Jenil",
      age: 25,
    },
    {
      id: 3,
      name: "Dixen",
      age: 26,
    },
  ]);

  return (
    <div>
      <h1>{props.title}</h1>
      <h1>User Component</h1>
      {/* <button onClick={() => {test()}}>Test</button> */}
      <UserList
        apptitle={props.title}
        users={users}
        test={test}
        delete={deleteUser}
        add = {addUser}
      />
      <UserRegistration add = {addUser}/>
    </div>
  );
};
