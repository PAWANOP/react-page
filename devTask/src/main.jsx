import React, { Children } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements ,Outlet } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Dashboard from './components/Dashboard.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={< Outlet />}>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-account' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
