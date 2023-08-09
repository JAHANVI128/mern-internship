import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = () => {

  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear();

    toast.success('Logout successfully done!!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    navigate('/login')
  }

  return (
    <div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/aboutus">About Us</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contactus">Contact Us</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">Api Demo 1</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">Api Demo 2</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">Login</Link>
            </li>
            <button className="btn btn-danger" onClick={() => {logout()}}>Logout</button>

            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
            {/* <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
          {/* <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}

        </div>
      </nav>
    </div>
  )
}
