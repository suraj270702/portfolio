import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes } from 'react-router-dom'
import Resume from './components/Resume'
import Home from './components/Home'
import About from './components/About'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      

<Route path='/' element={<Home />} >
      <Route path='resume' element={<Resume />} />
      <Route path='/' element={<About />} />
      </Route>

      
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
