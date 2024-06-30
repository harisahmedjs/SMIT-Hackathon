import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../screens/home/Home'
import Login from '../screens/login/Login '
import Register from '../screens/register/Register'

const RouterConfig = () => {
  return (
    <BrowserRouter>
    <Routes>
           <Route path='' element = { <Login />} /> 
           <Route path='/register' element = { <Register /> }/>
           <Route path='/home' element = { <Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig