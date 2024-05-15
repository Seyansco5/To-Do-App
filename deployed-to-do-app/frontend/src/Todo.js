import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import validation from './TodoValidation';


function Todo() {
 const [values, setValues]= useState({
  title: "",
  description: "",
  author: "",
 })
 const navigate= useNavigate()
 const [error, setError]= useState({})
 const handleChange = (event)=> {
    setValues ({...values, [event.target.name]:event.target.value})
 }
const handleSubmit = (event)=> {
  event.preventDefault();
  setError(validation(values));
  if(error.title=== "" && error.description=== "" && error.author=== ""){
    axios.post('http://localhost:8081/Todo', values)
    .then(res => 
      {if (res.values==="")
      navigate("/Table.js")}
    )
    .catch(err => console.log(err))
  }}

  return (
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <h2 className="navbar-brand px-2">TODO APP</h2>
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
              <span className="navbar-text px-4">
              </span> 
              <span className="navbar-link px-4">
                <Link to="/" className='btn btn-success'>Logout</Link>
              </span>
          </div>
            </nav>
            <div className="col px-4 mt-5"><h4>My Todo Items</h4>
            <div className='table'>
            <table>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Created by</th>
                  <th>Date Created</th>
                </tr>
                <tr>
                  <td>Children Shopping</td>
                  <td>Shopping for Children clothes for Summer Vacation.</td>
                  <td>Not yet done</td>
                  <td>John Olubobokun</td>
                  <td>05 Jan 2024</td>
                </tr>
                <tr>
                  <td>Children Shopping</td>
                  <td>Shopping for Children clothes for Summer Vacation.</td>
                  <td>Not yet done</td>
                  <td>John Olubobokun</td>
                  <td>05 Jan 2024</td>
                </tr>
                <tr>
                  <td>Children Shopping</td>
                  <td>Shopping for Children clothes for Summer Vacation.</td>
                  <td>Not yet done</td>
                  <td>John Olubobokun</td>
                  <td>05 Jan 2024</td>
                </tr> 
            </table>
            </div>
            <div className="header-h4"><h4>Add Todo Items here</h4></div>
            </div>
            <div className="add-todo">
            <form action="" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center align-items-center bg-white vh-100">
            <div className="col px-4">
              <label htmlFor='title'><h5>Title</h5></label>
              <input type="text" className="form-control rounded-0" id="title" placeholder="Enter Todo title e.g shopping" name="title" onChange={handleChange} />
              {error.title && <span className='text-danger'>{error.title}</span>}
            </div>
            <div className="col px-4">
              <label htmlFor='description'><h5>Description</h5></label>
              <input type="text" className="form-control rounded-0" id="description" placeholder="Enter Todo description" name="description" onChange={handleChange} />
              {error.description && <span className='text-danger'>{error.description}</span>}
            </div>
            <div className="col px-4">
              <label htmlFor='author'><h5>Author</h5></label>
              <input type="text" className="form-control rounded-0" id="author" placeholder="Enter Author e.g John" name="author" onChange={handleChange} />
              {error.author && <span className='text-danger'>{error.author}</span>}
              </div>
           </div>
           <div className="col px-4">
              <button type="submit" className="button-add">Add</button>
            </div>
            </form>
           </div>
          </div>
          
        )
      }

  export default Todo