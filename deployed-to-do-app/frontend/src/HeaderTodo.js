import React from 'react'
import { Link } from 'react-router-dom'
import Todo from './Todo'
import { Outlet } from 'react-router-dom'

function HeaderTodo() {
  return (
   <div>
    <Outlet />
    <Todo />
  </div>
  )
}

export default HeaderTodo