import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

  const [users, setusers] = useState([])

  const getUserData = async() => {

    const res = await axios.get("http://localhost:3001/user/user")
    console.log(res.data)
    console.log(res.status)
    setusers(res.data.data)
  }
  return (
    <div>
      <h1>ApiDemo1</h1>
      <button onClick={
        () => {
          getUserData()
        }
      }>Get User Data</button>
      <table class="table">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  )
}
