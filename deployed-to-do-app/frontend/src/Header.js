import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <h2 className="navbar-brand px-2">TODO APP</h2>
    <div className="navbar-nav ms-auto mb-2 mb-lg-0">
      <span className="navbar-text px-4">
      <Link to='http://localhost:3001/About.html'>About</Link>
      </span> 
      <span className="navbar-link px-4">
        <Link to="/Signup" className='btn btn-success'>SignUp/Create Account</Link>
      </span>
    </div>
    </nav>
 </div>

  )
}

export default Header