import React, {useState} from 'react'
import validation from './SignupValidation'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'

function Signup() {
    const[values, setValues]= useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    })
    const navigate= useNavigate()
    const [error, setError] = useState({})
    const handleChange = (event)=> {
        setValues ({...values, [event.target.name]:event.target.value})
    }
    const handleSubmit = (event)=> {
        event.preventDefault();
        setError(validation(values));
        if(error.firstname=== "" && error.lastname=== "" && error.email=== "" && error.password=== "") {
          axios.post('http://localhost:8081/Signup', values)
          .then(res => 
            {if(res.values===""){
            navigate('/')}
          })
          .catch(err => console.log(err));
        }
    }
  return (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <h2 className="navbar-brand px-2">TODO APP</h2>
        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
          <span className="navbar-text px-4">
         <a href='http://localhost:3001/About.html'>About</a>
        </span> 
      <span className="navbar-link px-4">
        <Link to="/Signup" className='btn btn-success'>SignUp/Create Account</Link>
      </span>
       </div>
    </nav>
    <div className='d-flex justify-content-center align-items-center bg-white vh-100'>
     <div className='bg-white p-3 rounded w-25'>
     <h2>Create Account</h2>
    <form action="" className="row g-3" onSubmit={handleSubmit}>
  <div className="col-md-6">
   <label htmlFor='fname'><strong>First name</strong></label>
    <input type='text' id="fname" placeholder='First name' name='firstname' onChange={handleChange} className='form-control rounded-0' autoComplete='on' />
    {error.firstname && <span className='text-danger'>{error.firstname}</span>}
  </div>
  <div className="col-md-6">
  <label htmlFor='lname'><strong>Last name</strong></label>
    <input type='text' id="lname" placeholder='Last name' name='lastname' onChange={handleChange} className='form-control rounded-0' autoComplete='on' />
    {error.lastname && <span className='text-danger'>{error.lastname}</span>}
  </div>
  <div className="col-12">
  <label htmlFor='email'><strong>Email</strong></label>
  <input type='email' id="email" placeholder='Enter your email address' name='email' onChange={handleChange} className='form-control rounded-0' autoComplete='on' />
  {error.email && <span className='text-danger'>{error.email}</span>}
  </div>
  <div className="col-12">
   <label htmlFor='password'><strong>Create a password</strong></label>
     <input type='password' id="password" placeholder='Enter your password' name='password' onChange={handleChange} className='form-control rounded-0' autoComplete='on' />
  {error.password && <span className='text-danger'>{error.password}</span>}
  </div>
  <div className="col-12">
      <button type='submit' className="btn btn-success w-50">Sign Up</button>
    </div>
 </form>
    </div>    
  </div>
</div>
  )
}

export default Signup