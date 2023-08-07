import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiDemo1 = () => {

  const [users, setusers] = useState([])
  useEffect(() => {
    getUserData()
  }, [])
  

  const getUserData = async() => {

    const res = await axios.get("http://localhost:3001/user/user")
    console.log(res.data)
    console.log(res.status)
    setusers(res.data.data)
  }
  return (
    <div>
      <h1>ApiDemo1</h1>
      {/* <button onClick={
        () => {
          getUserData()
        }
      }>Get User Data</button> */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">age</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((user) => {
              return(
                <tr>
                  <th scope="row">{user._id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
