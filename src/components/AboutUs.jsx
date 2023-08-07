import React from 'react'
import { Link } from 'react-router-dom'

export const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        {/* <li>Company</li>
        <li>Country</li> */}
        <li>
          <Link to="/aboutus/company">COMPANY</Link>
        </li>
        <li>
        <Link to="/aboutus/country">COUNTRY</Link>
        </li>
      </ul>
    </div>
  )
}
