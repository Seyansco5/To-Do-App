import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Todo from './Todo'
import Signup from './Signup'
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/App.css"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/Todo' element={<Todo />}></Route>
    </Routes>
    </BrowserRouter>
     
  )
}

export default App