import React from 'react'
import { UserList } from './UserList'

export const UserComponent = (props) => {

  const test = (user) => {
    // alert("test => "+name)

    alert("test method called...")
    console.log("test method called",user)
  }

  const deleteUser = (id) => {
    console.log("user deleted...",id)
    users = users.filter((user) => {
      return user.id != id
    })

    console.log("after delete...",users)
  }
  console.log(props)

  var users = [{
    id: 1,
    name:"Mahima",
    age:23
  },{
    id :2,
    name:"Jenil",
    age:25    
  },
{
  id : 3,
  name: "Dixen",
  age:26
}]
  return (
    <div>
      <h1>{props.title}</h1>
        <h1>
            User Component
        </h1>
        {/* <button onClick={() => {test()}}>Test</button> */}
        <UserList apptitle = {props.title} users = {users} test = {test} delete = {deleteUser}/>
    </div>
  )
}
